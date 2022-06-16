import fetchAPI from "./fetchAPI.js";

const fetchAPIProperties = async (queries = {}) => {
  const forRent = await fetchAPI("list", { ...queries, method: "for-rent" });
  const forSale = await fetchAPI("list", { ...queries, method: "for-sale" });
  const allProperties = [...forRent.hits, ...forSale.hits];
  return allProperties;
};

export default fetchAPIProperties ;
