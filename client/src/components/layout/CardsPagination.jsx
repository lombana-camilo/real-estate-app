import { useEffect, useState } from "react";
import AdCard from "./../Ads/AdCard";
const CardsPagination = ({ allAds }) => {
  let ads = [...allAds];
  const totalAds = ads.length;
  const adsPerPage = 4;
  const totalPages = Math.ceil(totalAds / adsPerPage);
  const [currPage, setCurrPage] = useState(0);
  const [currAds, setCurrAds] = useState([]);

  let pages = []
  for (let i = 0; i < totalPages; i++) {
    pages.push(ads.splice(0, adsPerPage));
  }
   // console.log(pages)

  useEffect(() => {
    setCurrAds(pages[0]);
  }, []);

const getPage = (index)=>{
      setCurrAds(pages[index])
      setCurrPage(index)
   }

  return (
    <main className="flex flex-col items-center">
      <AdCard ads={currAds} />
         <div className="flex gap-2">
            {
            pages.map((set,index)=>(
               <button onClick={()=>getPage(index)} key={index} 
                  className={`text-2xl pb-8 hover:text-focus focus:outline-none ${index === currPage && " text-focus"}`}>
                  {index + 1}</button>
            ))
         }
         </div>
    </main>
  );
};

export default CardsPagination;
