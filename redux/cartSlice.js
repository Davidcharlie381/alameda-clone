import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find((item) => item.slug === action.payload.slug);
      if (item) {
        item.qty++;
      } else {
        state.push({ ...action.payload, qty: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.find((item) => item.slug === action.payload.slug);
      item.qty++;
    },
    incrementByQuantity: (state, action) => {},
    decrementQuantity: (state, action) => {
      const item = state.find((item) => item.slug === action.payload.slug);
      if (item.qty === 1) {
        const index = state.findIndex((item) => item.slug === action.payload);
        state.splice(index, 1);
      } else {
        item.qty--;
      }
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex((item) => item.slug === action.payload);
      state.splice(index, 1);
    },
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
