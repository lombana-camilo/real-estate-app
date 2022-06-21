import axios from "axios";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getAllAds = createAsyncThunk(
  "ads/getAllAds",
  async (config = {}) => {
    const { data } = await axios.get(
      "http://localhost:3001/properties/",
      config
    );
    return data;
  }
);

export const getDetails = createAsyncThunk("ads/getDetails", async (id) => {
  const { data } = await axios.get(`http://localhost:3001/properties/${id}`);
   return data
});

const adsSlice = createSlice({
  name: "ads",
  initialState: {
    allAds: [],
    adDetails: [],
    dbAds: [],
    isLoading: "",
  },
  extraReducers: {
      //getAllAds
    [getAllAds.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllAds.fulfilled]: (state, action) => {
      state.allAds = action.payload;
      state.isLoading = false;
    },
    [getAllAds.rejected]: (state) => {
      state.isLoading = false;
    },
      //getDetails
    [getDetails.pending]: (state) => {
      state.isLoading = true;
    },
    [getDetails.fulfilled]: (state, action) => {
      state.adDetails = action.payload;
      state.isLoading = false;
    },
    [getDetails.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

// export const { getAllAds } = adsSlice.actions;
export default adsSlice.reducer;
