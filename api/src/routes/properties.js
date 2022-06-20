import { Router } from "express";
import fetchAPIAds from "./../utils/fetchAPIProperties.js";
import fetchAPI from "./../utils/fetchAPI.js";
import { db, Op } from "./../db.js";

const router = Router();
const { Property } = db.models;

router.get("/", async (req, res) => {
  try {
    const queries = req.query;
    const allAdsAPI = await fetchAPIAds(queries);
    let allAdsDb = null;

    // const myad = await Property.create({
    //   title: "My ad",
    //   purpose: "for-rent",
    //   coverPhoto:
    //     "https://external-preview.redd.it/1jEZXFcM5-yI2EBFQoDIP8VMUmlMxKzfFzUjtRV16Yc.jpg?auto=webp&s=a2c5bc3c89064f38dc0b8e102e89d3db2a420ea4",
    //   price: 550000,
    //   rentFrequency: "yearly",
    //   area: 1000,
    //   rooms: 6,
    //   baths: 4,
    // });

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
  } catch (error) {
      res.status(404).send("error from routing")
  }
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
