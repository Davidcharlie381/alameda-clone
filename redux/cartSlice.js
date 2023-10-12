import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find((item) => item.slug === action.payload.slug);
      if (item) {
        item.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.find((item) => item.slug === action.payload.slug);
      item.quantity++;
    },
    incrementByQuantity: (state, action) => {},
    decrementQuantity: (state, action) => {
      const item = state.find((item) => item.slug === action.payload.slug);
      if (item.quantity === 1) {
        const index = state.findIndex((item) => item.slug === action.payload);
        state.splice(index, 1);
      } else {
        item.quantity--;
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
