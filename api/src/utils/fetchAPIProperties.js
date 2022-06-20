import fetchAPI from "./fetchAPI.js";

const fetchAPIAds = async (queries = {}) => {
  try {
    const apiAds = await fetchAPI("list", { ...queries });

      if (apiAds.hits.length === 0) return []
    //Cleaning up data
    const cleanApiAds = apiAds.hits.map((ad) => {
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
    return cleanApiAds;
  } catch (error) {
    console.log(error);
  }
};

export default fetchAPIAds;
