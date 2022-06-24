import { Link } from "react-router-dom";

const AdCard = ({ allAds, fromUser=false, removeAd }) => {

  return (
    <div className="flex flex-wrap mx-9">
      {allAds.map((ad) => {
        return (
          <div key={ad.id} className="flex flex-col  w-64 h-72 m-3">
                  <Link to={`/properties/${ad.id}`}>
                     <img src={ad.coverPhoto} alt="cover pic" className="object-cover h-52"/>
                  </Link>
                  <h2 className="text-primary font-semibold">${ad.price}</h2>
            <h1> {ad.title} </h1>
                  {fromUser && <button onClick={()=>removeAd(ad.id)} className="text-alert font-semibold">Delete Ad</button> }
          </div>
        );
      })}
    </div>
  );
};

export default AdCard;
