import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    amount: 0,
    total: 0
}

const basketSlice = createSlice({
    name: "basket",
    initialState,
})

export default basketSlice.reducer;