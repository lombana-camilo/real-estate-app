import axios from "axios";
import "dotenv/config";
const { API_KEY, API_HOST } = process.env;

//Further queries:rentFrequency, priceMin,areaMin,roomsMin,areaMin...
const fetchAPI = async (endpoint, queries) => {
  let options = {
    method: "GET",
    url: `https://bayut.p.rapidapi.com/properties/${endpoint}`,
    headers: { "X-RapidAPI-Key": API_KEY, "X-RapidAPI-Host": API_HOST },
  };

  if (endpoint === "detail") {
    options.params = { externalID: queries };
  } else {
    options.params = {
      ...queries,
      locationExternalIDs: "5002",
      hitsPerPage: "12",
      page: "0",
      lang: "en",
    };
  }

  try {
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    console.log(error.response.data.message);
  }
};

export default fetchAPI;
