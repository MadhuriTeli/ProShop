import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtlis";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      // Update the cart state using the updateCart function
      return updateCart(state, item);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
