import { Router } from "express";
import Ads from "./../controllers/Ads.js";

const router = Router();

router.get("/", Ads.getAllAdsOrQuery);
router.get("/:id", Ads.getAdDetails);
router.get("/db/:email", Ads.getDbAds);
router.post("/db/:email", Ads.createAd);
router.delete("/db/:id", Ads.deleteAd);

export default router;
