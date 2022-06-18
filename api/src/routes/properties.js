import { Router } from "express";
import fetchAPIProperties from "./../utils/fetchAPIProperties.js";
import fetchAPI from "./../utils/fetchAPI.js";
import { db, Op } from "./../db.js";

const router = Router();
const { Property } = db.models;

router.get("/", async (req, res) => {
  const queries = req.query;
  const allAdsAPI = await fetchAPIProperties(queries);
  let allAdsDb = null;
  const myad = await Property.create({
    title: "My ad",
    purpose: "for-rent",
    price: 550000,
    rentFrequency: "yearly",
    area: 1000,
    rooms: 6,
    baths: 4,
  });
  if (Object.keys(queries).length !== 0) {
    const {
      priceMin,
      priceMax,
      areaMin,
      roomsMin,
      bathsMin,
      purpose,
      rentFrequency,
    } = queries;

    allAdsDb = await Property.findAll({
      where: {
        price: { [Op.between]: [priceMin, priceMax] },
        area: { [Op.gte]: areaMin },
        rooms: { [Op.gte]: roomsMin },
        baths: { [Op.gte]: bathsMin },
        purpose,
        rentFrequency,
      },
    });
  } else {
    allAdsDb = await Property.findAll();
  }

  const totalAds = [...allAdsDb, ...allAdsAPI];
  res.json(totalAds);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const apiId = await fetchAPI("detail", id);
  // sequelize queries respond with error instead of "" or null
  let dbId = "";
  try {
    dbId = await Property.findOne({ where: { id: `${id}` } });
  } catch (err) {
    dbId = "";
  }
  const found = dbId ? dbId.toJSON() : apiId ? apiId : null;
  res.json(found);
});

router.post("/", (req, res) => {
  const newAd = req.body;
  Property.create(newAd);
  res.send("Posted!");
});

export default router;
