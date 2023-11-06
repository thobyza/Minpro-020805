import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import basketReducer from "./ticketSlice";
import referralSlice from "./referralSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    basket: basketReducer,
    referral: referralSlice,
  },
});
