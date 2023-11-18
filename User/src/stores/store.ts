import { configureStore } from "@reduxjs/toolkit";

import appSlice from "../slices/appSlice";
import authSlice from "../slices/authSlice";

// reducers

const store = configureStore({
  reducer: {
    app: appSlice,
    auth: authSlice,
  },
});
export default store;
