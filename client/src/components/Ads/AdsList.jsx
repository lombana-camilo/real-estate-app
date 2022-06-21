import AdCard from "./AdCard";
import NotFound from "./NotFound";
import IsLoading from "./IsLoading";
import FilterForm from "./../layout/FilterForm";
import { useSelector } from "react-redux";

const AdsList = () => {
  const { allAds, isLoading } = useSelector((store) => store.ads);

  return (
    <div>
      <FilterForm />
      {isLoading ? (
        <IsLoading />
      ) : allAds.length === 0 ? (
        <NotFound />
      ) : (
        <AdCard allAds={allAds} />
      )}
    </div>
  );
};

export default AdsList;
