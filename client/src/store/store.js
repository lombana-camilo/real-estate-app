import adsReducer from "./ads/adsSlice"
const { configureStore } = require("@reduxjs/toolkit");

export default configureStore({
   reducer:{
      ads:adsReducer
   }
})
