import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {},
    incrementQuantity: (state, action) => {},
    incrementByQuantity: (state, action) => {},
    decrementQuantity: (state, action) => {},
    removeFromCart: (state, action) => {},
  },
});

export const {
  addToCart,
  incrementQuantity,
  incrementByQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
