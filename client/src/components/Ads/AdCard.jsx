const AdCard = ({ allAds }) => {
  return (
    <div className="flex flex-wrap mx-9">
      {allAds.map((ad) => {
        return (
          <div key={ad.id} className="flex flex-col  w-64 h-72 m-3">
            <img src={ad.coverPhoto} alt="cover pic" className="object-cover h-52"/>
                  <h2>${ad.price}</h2>
            <h1> {ad.title} </h1>
          </div>
        );
      })}
    </div>
  );
};

export default AdCard;
