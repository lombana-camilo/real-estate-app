import AdCard from "./AdCard";
import { useSelector } from "react-redux";

const AdsList = () => {
  const { allAds } = useSelector((store) => store.ads);

  return (
    <div>
      <AdCard allAds={allAds} />
    </div>
  );
};

export default AdsList;
