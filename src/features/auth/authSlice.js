import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  IsGuest: true,
  IsLogged: false,
  Token: null,
  logoutbanner: false
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handlelogInUser: (state, action) => {
      state.IsLogged = true;
      state.IsGuest = false;
      state.data = action.payload;
    },

    // showlogoutbanner: (state) => {
    //   state.logoutbanner = true
    // },

    hidelogoutbanner: (state) => {
      state.logoutbanner = false
    },

    handlelogOut: (state) => {
      state.IsLogged = false;
      state.IsGuest = true;
      state.date = null;
      state.logoutbanner = true

    },
  },
});

export const {
  handlelogInUser,
  handlelogInMerchant,
  handlelogOut,
  hidelogoutbanner
} = authSlice.actions;

export default authSlice.reducer;
