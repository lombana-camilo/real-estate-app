import { Router } from "express";
import fetchAPIProperties from "./../utils/fetchAPIProperties.js";
import fetchAPI from "./../utils/fetchAPI.js";
import { db, Op } from "./../db.js";

const router = Router();
const { Property } = db.models;

router.get("/", async (req, res) => {
  const queries = req.query;
  const allAdsAPI = await fetchAPIProperties(queries);
  // const myad = await Property.create({
  //   title: "My ad",
  //   purpose: "for-sale",
  //   price: 300000,
  //   rentFrequency: "monthly",
  //   rooms: 18,
  //   baths: 3,
  // });

  const { priceMin, priceMax,areaMin,areaMax,
      roomsMin,roomsMax,bathsMin,bathsMax,purpose,rentFrequency } = queries;
  const allAdsDb = await Property.findAll({
    where: {
      price: { [Op.gte]: [priceMin, priceMax] },
      area: { [Op.between]: [areaMin, areaMax] },
      rooms: { [Op.between]: [roomsMin, roomsMax] },
      baths: { [Op.between]: [bathsMin, bathsMax] },
      purpose,
      rentFrequency
    },
  });
  const totalAds = [...allAdsDb, ...allAdsAPI];
  res.json(totalAds);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const apiId = await fetchAPI("detail", id);
   // sequelize queries respond with error instead of "" or null
   let dbId = "";
   try {
      dbId = await Property.findOne({ where:{ id:`${id}` }})
   } catch (err) { dbId = "" }
   const found = dbId ? dbId.toJSON(): apiId ? apiId : null
  res.json(found);
});

router.post("/", (req, res) => {
   const newAd = req.body;
   Property.create(newAd)
   res.send("Posted!")
});

export default router;
