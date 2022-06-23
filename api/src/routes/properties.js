import { Router } from "express";
import fetchAPIAds from "./../utils/fetchAPIAds.js";
import fetchDetails from "./../utils/fetchDetails.js";
import { db, Op } from "./../db.js";

const router = Router();
const { Property, User } = db.models;

router.get("/", async (req, res) => {
  try {
    const queries = req.query;
    const allAdsAPI = await fetchAPIAds(queries);
    let allAdsDb = null;

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
    res.status(404).send("error from routing");
  }
});

router.get("/db/:email", async (req, res) => {
  const { email } = req.params;
  const ads = await Property.findAll({
    where: { UserEmail: email },
  });
  if (ads) {
    res.send(ads);
  } else {
    res.status(404).send("No ads Found on that email");
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const apiId = await fetchDetails(id);
  // sequelize queries respond with error instead of "" or null
  let dbId = "";
  try {
    dbId = await Property.findOne({ where: { id } });
  } catch (err) {
    dbId = "";
  }
  const found = dbId ? dbId : apiId ? apiId : null;
  res.json(found);
});

router.post("/db/:email", async (req, res) => {
  const formData = req.body;
  const  {email}  = req.params;
  const user = await User.findOne({ where: { email } });
  const newAd = await Property.create(formData);
  await user.addProperty(newAd);

  res.send(newAd);
});

export default router;
