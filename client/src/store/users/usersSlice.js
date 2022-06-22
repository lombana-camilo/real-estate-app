import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createUser = createAsyncThunk("users/createUser", async (data) => {
  await axios.post("http://localhost:3001/users/signup", data);
  return data;
});
export const login = createAsyncThunk("users/login", async (userData) => {
  const { data } = await axios.post(`http://localhost:3001/users/login`,userData);
  return data;
});

const reduxSlice = createSlice({
  name: "users",
  initialState: {
    currentUser: {},
    isLoading: false,
  },
  reducers: {
    logout: (state) => {
      state.currentUser = {};
    },
  },
  extraReducers: {
    //createuser
    [createUser.pending]: (state) => {
      state.isLoading = true;
    },
    [createUser.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    },
    [createUser.rejected]: (state) => {
      state.isLoading = false;
    },
    //login
    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    },
    [login.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { logout } = reduxSlice.actions;
export default reduxSlice.reducer;
