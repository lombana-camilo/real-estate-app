import fetchAPI from "./fetchAPI.js";

const fetchAPIProperties = async (queries = {}) => {
  const forRent = await fetchAPI("list", { ...queries, purpose: "for-rent" });
  const forSale = await fetchAPI("list", { ...queries, purpose: "for-sale" });
  const joinAds = [...forRent.hits, ...forSale.hits];

  //Cleaning up data
  const allAds = joinAds.map((ad) => {
    return {
      id: ad.externalID,
      title: ad.title,
      coverPhoto: ad.coverPhoto.url,
      purpose: ad.purpose,
      price: ad.price,
      rentFrequency: ad.rentFrequency,
      rooms: ad.rooms,
      baths: ad.baths,
      area: ad.area,
    };
  });
  return allAds;
};

export default fetchAPIProperties;
