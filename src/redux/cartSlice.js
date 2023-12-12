import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const isExist = state.find((item) => item.id === action.payload.id);
      if (isExist) {
        toast.error("Already in the cart");
      } else {
        state.push(action.payload);
        toast.success("Item added to cart");
      }
    },
    deleteItem(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;  
