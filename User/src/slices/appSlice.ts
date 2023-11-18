import { IAppState } from "../models/IAppState";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IAppState = {
  isLoading: false,
};

const app = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoading } = app.actions;

export default app.reducer;
