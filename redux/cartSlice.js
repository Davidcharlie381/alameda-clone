import { createSlice } from "@reduxjs/toolkit";

const cart = JSON.parse(localStorage.getItem("cart"));

const cartSlice = createSlice({
  name: "cart",
  initialState: cart ? cart : [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find((item) => item.slug === action.payload.slug);
      if (item) {
        item.qty++;
        localStorage.setItem("cart", JSON.stringify(state));
      } else {
        state.push({ ...action.payload, qty: action.payload.qty });
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.find((item) => item.slug === action.payload.slug);
      item.qty++;
      localStorage.setItem("cart", JSON.stringify(state));
    },
   // incrementByQuantity: (state, action) => {},
    decrementQuantity: (state, action) => {
      const item = state.find((item) => item.slug === action.payload.slug);
      if (item.qty === 1) {
        const index = state.findIndex((item) => item.slug === action.payload);
        state.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(state));
      } else {
        item.qty--;
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex((item) => item.slug === action.payload);
      state.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(state));
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
