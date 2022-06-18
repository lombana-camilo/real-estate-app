
const AdCard = ({allAds}) => {
   return (
      <div>
      {allAds.map(ad=> {
         return (
         <div key={ad.externalID}>
                  <h1> {ad.title} </h1>
                  {ad.coverPhoto.url && <img src={ad.converPhoto.url} alt="property photo" /> }
               </div>
         )
      })}
   
      </div>
   )
}

export default AdCard
