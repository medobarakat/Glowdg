import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  IsGuest: true, //!dont forget to return it to true 
  IsLogged: false,
  Token: null,
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

    handlelogInGuest: (state, action) => {
      state.IsLogged = false;
      state.IsGuest = true;
      state.data = action.payload;
    },

    handlelogOut: (state) => {
      state.IsLogged = false;
      state.IsGuest = false;
      state.date = null;
    },
  },
});

export const {
  handlelogInUser,
  handlelogInMerchant,
  handlelogInGuest,
  handlelogOut,
} = authSlice.actions;

export default authSlice.reducer;
