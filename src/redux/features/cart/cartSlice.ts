import { RootState } from "@/redux/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TCart = {
  _id: string;
  count: number;
};
type TCartState = {
  cart: TCart[];
  totalCartItems: number;
};

const initialState: TCartState = {
  cart: [],
  totalCartItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem(state, action: PayloadAction<{ _id: string }>) {
      const { _id } = action.payload;
      const existingItem = state.cart.find((item) => item._id === _id);
      if (existingItem) {
        existingItem.count += 1;
      } else {
        state.cart.push({ _id, count: 1 });
      }
      state.totalCartItems += 1;
    },
    removeCartItem(state, action: PayloadAction<{ _id: string }>) {
      const { _id } = action.payload;
      const existingItem = state.cart.find((item) => item._id === _id);
      if (existingItem) {
        if (existingItem.count > 1) existingItem.count -= 1;
        else if (existingItem.count === 1) {
          const newCart = state.cart.filter((item) => item._id !== _id);
          state.cart = newCart;
        }
        state.totalCartItems -= 1;
      }
    },
  },
});

export const { addCartItem, removeCartItem } = cartSlice.actions;

export const getCartInfos = (state: RootState) => state.carts.cart;
export const getCartCounts = (state: RootState) => state.carts.totalCartItems;

export default cartSlice.reducer;
