import { createSlice } from "@reduxjs/toolkit";

const referralSlice = createSlice({
  name: "referral",
  initialState: {
    referrals: {},
  },
  reducers: {
    setReferrals: (state, action) => {
      state.referrals = action.payload;
    },
  },
});

export const { setReferrals } = referralSlice.actions;
export default referralSlice.reducer;
