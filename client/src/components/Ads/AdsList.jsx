import AdCard from "./AdCard"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAds } from "./../../store/ads/adsSlice";

const AdsList = () => {
  const dispatch = useDispatch();
  const { allAds } = useSelector((store) => store.ads);

  useEffect(() => {
    dispatch(getAllAds());
  }, [dispatch]);
  return (
    <div>
      <AdCard allAds={allAds}/>
    </div>
  );
};

export default AdsList;
