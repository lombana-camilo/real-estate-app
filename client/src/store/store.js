import adsReducer from "./ads/adsSlice";
import usersReducer from "./users/usersSlice";
const { configureStore } = require("@reduxjs/toolkit");

export default configureStore({
  reducer: {
    ads: adsReducer,
    users: usersReducer,
  },
});
