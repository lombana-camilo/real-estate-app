import IsLoading from "./IsLoading";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetails } from "./../../store/ads/adsSlice";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch, id]);

  const { adDetails: ad } = useSelector((state) => state.ads);

  return (
    <>
      {ad.length !== 0 ? (
        <div key={ad.id} className="flex flex-col items-center px-3 sm:px-10 md:px-24 lg:px-64 mt-8">
               <div className="inset-x-20 h-1/3" >
                  <Splide className="h-2/6"
                     options={{
                        perPage:1,
                        // type: "loop",
                        // height: "70vh",
                        width: "80vw",
                        autoHeight: true,
                        // autoWidth: true,
                     }}
                  >
                     {ad.photos.map((p, key) => (
                        <SplideSlide key={key} >
                           <img src={p} alt="cover pic" className=" h-full w-full" />
                        </SplideSlide>
                     ))}
                  </Splide>
               </div>
          <h2 className="font-semibold text-lg"> ${ad.price} {ad.title} </h2>
          <p>{ad.description}</p>
        </div>
      ) : (
        <IsLoading />
      )}
    </>
  );
};

export default Details;
