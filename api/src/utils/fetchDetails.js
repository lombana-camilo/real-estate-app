import fetchAPI from "./fetchAPI.js";

const fetchDetails = async (id = "") => {
  try {
    const apiAdDetails = await fetchAPI("detail", id);

    // Cleaning up data

    //Photos URLs as Array of strings
    let photos = [];
    apiAdDetails.photos.forEach((p) => {
      photos.push(p.url);
    });

    const cleanApiDetails = {
      id: apiAdDetails.externalID,
      title: apiAdDetails.title,
      coverPhoto: apiAdDetails.coverPhoto.url,
      purpose: apiAdDetails.purpose,
      price: apiAdDetails.price,
      rentFrequency: apiAdDetails.rentFrequency,
      rooms: apiAdDetails.rooms,
      baths: apiAdDetails.baths,
      area: apiAdDetails.area,

      contactName: apiAdDetails.contactName,
      contactPhone: apiAdDetails.phoneNumber.mobile,
      description: apiAdDetails.description,
      photos,
    };
    return cleanApiDetails;
  } catch (error) {
      // console.log(error);
      return ""
  }
};

export default fetchDetails;
