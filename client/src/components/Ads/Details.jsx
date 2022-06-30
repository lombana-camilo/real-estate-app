import IsLoading from "./IsLoading";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetails } from "./../../store/ads/adsSlice";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { FaRestroom, FaBed } from "react-icons/fa";

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
        <div key={ad.id} className="flex pt-10 w-full h-screen overflow-auto px-5 gap-5">
               <div className="float-left w-1/2 h-2/3" >
               {/* <div className="fixed top-14 w-1/2" > */}
                  <Splide className=""
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
                           <img src={p} alt="cover pic" className=" h-fit w-full" />
                        </SplideSlide>
                     ))}
                  </Splide>
                  <div className="flex flex-col items-center">
                     <p className="font-semibold text-lg"> {ad.title} </p>
                     <div className="flex gap-2">
                        <span>{ad.baths}</span>
                        <FaRestroom/>
                        <span>|</span>
                        <span>{ad.rooms}</span>
                        <FaBed/>
                        <span>|</span>
                        <span> {parseFloat( ad.area ).toFixed(2)} ft<sup>2</sup></span>
                     </div>
                     <p className="font-semibold text-lg text-primary/70"> AED ${ad.price} </p>
                  </div>
               </div>
               <div className="w-1/2 overflow-auto text-justify px-10">
                  <div className="bg-secondary/20">
                     <p><strong>Contact: </strong>{ ad.contactName }</p>
                     <p><strong>Phone: </strong>{ ad.contactPhone }</p>
                  </div>
                  <h2 className="font-semibold text-lg text-center py-4">Property Description</h2>
                  <p>{ad.description} </p> 
               </div>
        </div>
      ) : (
        <IsLoading />
      )}
    </>
  );
};

export default Details;
