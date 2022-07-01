import AdCard from "./AdCard";
import CreateAdForm from "./CreateAdForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDbAds, deleteAd } from "./../../store/ads/adsSlice.js";
import { unwrapResult } from "@reduxjs/toolkit";

const MyAds = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.users);
  const { dbAds } = useSelector((state) => state.ads);

  useEffect(() => {
    dispatch(getDbAds(currentUser.email));
  }, [dispatch, currentUser.email]);

  const removeAd = (adId) => {
    dispatch(deleteAd(adId))
      .then(unwrapResult)
      .then(()=>dispatch(getDbAds(currentUser.email)));
  };

  return (
    <div className="mt-12 flex flex-col m-3">
      <CreateAdForm userEmail={currentUser.email} />
      <AdCard ads={dbAds} fromUser={true} removeAd={removeAd} />
    </div>
  );
};

export default MyAds;
