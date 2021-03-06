import axios from "./../../api/axios.js";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getAllAds = createAsyncThunk(
  "ads/getAllAds",
  async (config = {}) => {
    const { data } = await axios.get( "/properties/", config);
    return data;
  }
);

export const getDbAds = createAsyncThunk("ads/getDbAds", async (email) => {
  const { data } = await axios.get( `/properties/db/${email}`);
   return data
});

export const getDetails = createAsyncThunk("ads/getDetails", async (id) => {
  const { data } = await axios.get(`/properties/${id}`);
  return data;
});

export const createAd = createAsyncThunk("ads/createAd", async (formAndEmail) => {
   const {adData, email} = formAndEmail
  const { data } = await axios.post(`/properties/db/${email}`,adData);
  return data;
});

export const deleteAd = createAsyncThunk("ads/deleteAd", async (adId)=>{
   await axios.delete(`/properties/db/${adId}`)
})

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
    //getDbAds
    [getDbAds.pending]: (state) => {
      state.isLoading = true;
    },
    [getDbAds.fulfilled]: (state, action) => {
      state.dbAds = action.payload;
      state.isLoading = false;
    },
    [getDbAds.rejected]: (state) => {
      state.isLoading = false;
    },
    //createAd
    [createAd.pending]: (state) => {
      state.isLoading = true;
    },
    [createAd.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.dbAds.push(action.payload)
    },
    [createAd.rejected]: (state) => {
      state.isLoading = false;
    },
      //deleteAd
  },
});

// export const { getAllAds } = adsSlice.actions;
export default adsSlice.reducer;
