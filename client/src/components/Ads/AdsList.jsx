import NotFound from "./NotFound";
import IsLoading from "./IsLoading";
import FilterForm from "./../layout/FilterForm";
import CardsPagination from "./../layout/CardsPagination";
import { useSelector } from "react-redux";

const AdsList = () => {
  const { allAds, isLoading } = useSelector((store) => store.ads);

  return (
    <div className="flex flex-col gap-12 ">
      <FilterForm />
      {isLoading ? (
        <IsLoading />
      ) : allAds.length === 0 ? (
        <NotFound />
      ) : (
        <>
          <CardsPagination allAds={allAds}/>
        </>
      )}
    </div>
  );
};

export default AdsList;
