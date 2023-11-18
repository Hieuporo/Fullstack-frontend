import { createSlice } from "@reduxjs/toolkit";
import { IAuthState } from "../models/IAuthState";

const initialState: IAuthState = {
  user: null,
  role: null,
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
    },
    loginFailure: (state) => {
      state.user = null;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { loginSuccess, loginFailure, logout } = auth.actions;

export default auth.reducer;
