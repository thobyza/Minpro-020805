import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import basketReducer from "./ticketSlice"

export const store = configureStore({
  reducer: {
    user: userSlice,
    basket: basketReducer,
  },
});
