import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "./../../api/axios.js";

export const createUser = createAsyncThunk(
  "users/createUser",
  async (userData, { rejectWithValue }) => {
    try {
      const user = await axios.post(
        "/users/signup",
        userData,
        { withCredentials: true }
      );
      const { name, email } = user.data;
      return { name, email };
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);
export const login = createAsyncThunk(
  "users/login",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `/users/login`,
        userData,
        { withCredentials: true }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const reduxSlice = createSlice({
  name: "users",
  initialState: {
    currentUser: {},
    isLoading: false,
    errorMessage: "",
  },
  reducers: {
    logout: (state) => {
      state.currentUser = {};
    },
    setError: (state, action) => {
      state.errorMessage = action.payload;
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
      state.errorMessage = "";
    },
    [createUser.rejected]: (state, error) => {
      state.isLoading = false;
      state.errorMessage = error.payload.message;
    },
    //login
    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
      state.errorMessage = "";
    },
    [login.rejected]: (state,error) => {
      state.isLoading = false;
      state.errorMessage = error.payload
    },
  },
});

export const { logout, setError } = reduxSlice.actions;
export default reduxSlice.reducer;
