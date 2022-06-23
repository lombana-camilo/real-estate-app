import AdCard from "./AdCard";
import CreateAdForm from "./CreateAdForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDbAds } from "./../../store/ads/adsSlice.js";

const MyAds = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.users);
  const { dbAds } = useSelector((state) => state.ads);

  useEffect(() => {
    dispatch(getDbAds(currentUser.email));
  }, [dispatch, currentUser.email]);

  return (
    <div className="mt-12 flex flex-col m-3">
      <CreateAdForm userEmail={currentUser.email}/>
      <AdCard allAds={dbAds} />
    </div>
  );
};

export default MyAds;
