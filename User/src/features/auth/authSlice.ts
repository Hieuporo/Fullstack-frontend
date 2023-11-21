import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../../types/auth.type";

const initialState: AuthState = {
  accessToken: "",
  refreshToken: "",
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state: AuthState, action: PayloadAction<AuthState>) => {
      const { accessToken, refreshToken } = action.payload;
      state.refreshToken = refreshToken;
      state.accessToken = accessToken;
    },
    logOut: (state) => {
      state.refreshToken = "";
      state.accessToken = "";
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentRefreshToken = (state: { auth: AuthState }) =>
  state.auth.refreshToken;
export const selectCurrentAccessToken = (state: { auth: AuthState }) =>
  state.auth.accessToken;

export const selectCurrentUser = (state: { auth: AuthState }) =>
  state.auth.user;
