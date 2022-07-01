import axios from "axios";

// const baseURL = process.env.REACT_APP_API_URL || "http://localhost:4000/";
const baseURL = process.env.REACT_APP_API_URL
console.log(baseURL)

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
