import { Link } from "react-router-dom";

const AdCard = ({ ads, fromUser=false, removeAd }) => {

  return (
    <div className="flex flex-wrap justify-center">
      {ads.map((ad) => {
        return (
          <div key={ad.id} className="flex flex-col w-64 h-72 m-3 bg-primary/10 justify-center items-center rounded-md p-2">
                  <Link to={`/properties/${ad.id}`} className="h-2/3 w-5/6">
                     <img src={ad.coverPhoto} alt="cover pic" className=" h-full w-full"/>
                  </Link>
                  <h2 className="text-primary font-semibold">${ad.price}</h2>
                  <h1 className="text-sm max-h-10"> {ad.title} </h1>
                  {fromUser && <button onClick={()=>removeAd(ad.id)} className="text-alert font-semibold bg-primary/10 px-1 rounded-md hover:bg-bg">Delete Ad</button> }
          </div>
        );
      })}
    </div>
  );
};

export default AdCard;
