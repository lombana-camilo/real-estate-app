const { createSlice } = require("@reduxjs/toolkit");

const adsSlice = createSlice({
   name: "ads",
   initialState:{
      allAds:[],
      dbAds:[]
   },
   reducers:{
      getAllAds:(state,action)=>{
         state.allAds = action.payload
      }
   }
})

export const {getAllAds} = adsSlice.actions
export default adsSlice.reducer
