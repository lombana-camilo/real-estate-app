import fetchAPIAds from "./../utils/fetchAPIAds.js";
import fetchDetails from "./../utils/fetchDetails.js";
import { db, Op } from "./../db.js";

const { Property, User } = db.models;

const Ads = {
  getAllAdsOrQuery: async (req, res) => {
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
  },

  getDbAds: async (req, res) => {
    const { email } = req.params;
    const ads = await Property.findAll({
      where: { UserEmail: email },
    });
    if (ads) res.send(ads);
    else res.status(404).send("No ads Found on that email");
  },

  getAdDetails: async (req, res) => {
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
  },

  createAd: async (req, res) => {
    try {
      const formData = req.body;
      const { email } = req.params;
      const user = await User.findOne({ where: { email } });
      const newAd = await Property.create(formData);
      await user.addProperty(newAd);
      res.send(newAd);
    } catch (e) {
         console.log({e})
      res.status(400).send(e);
    }
  },

  deleteAd: async (req, res) => {
    const { id } = req.params;
    await Property.destroy({ where: { id } });
    res.send("Deleted successfully");
  },
};

export default Ads;
