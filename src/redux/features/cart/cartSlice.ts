import { RootState } from "@/redux/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TCartItem = {
  _id: string;
  name: string;
  image: string;
  price: number;
  count: number;
  availableQuantity: number;
};
type TCartState = {
  cart: TCartItem[];
  totalCartItems: number;
  totalPrice: number;
};

const initialState: TCartState = {
  cart: [
    {
      _id: "668d6092b419e6e2621be6e7",
      image:
        "https://htmlcolorcodes.com/assets/images/colors/steel-gray-color-solid-background-1920x1080.png",
      name: "Razer BlackWidow Elite",
      price: 169.99,
      count: 3,
      availableQuantity: 3,
    },
    {
      _id: "668d609bb419e6e2621be6e9",
      image:
        "https://htmlcolorcodes.com/assets/images/colors/steel-gray-color-solid-background-1920x1080.png",
      name: "Corsair K95 RGB Platinum",
      price: 199.99,
      count: 3,
      availableQuantity: 20,
    },
    {
      _id: "6690c7390252c119c53c05cb",
      image:
        "https://htmlcolorcodes.com/assets/images/colors/steel-gray-color-solid-background-1920x1080.png",
      name: "HyperX Alloy FPS Pro",
      price: 79.99,
      count: 2,
      availableQuantity: 35,
    },
  ],
  totalCartItems: 8,
  totalPrice: 1269.92,
};
const initialState1: TCartState = {
  cart: [],
  totalCartItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addCartItem(state, action: PayloadAction<Omit<TCartItem, "count">>) {
      const { _id, image, name, price, availableQuantity } = action.payload;
      const existingItem = state.cart.find((item) => item._id === _id);
      if (existingItem) {
        existingItem.count += 1;
        state.totalPrice += existingItem.price;
      } else {
        state.cart.push({
          _id,
          image,
          name,
          price,
          availableQuantity,
          count: 1,
        });
        state.totalPrice += price;
      }
      state.totalCartItems += 1;
    },
    updateCartCount(
      state,
      action: PayloadAction<{ _id: string; type: "plus" | "minus" }>
    ) {
      const { _id, type } = action.payload;
      const existItem = state.cart.find((item) => item._id === _id);
      if (existItem) {
        if (type === "minus") {
          if (existItem.count > 1) existItem.count -= 1;
          else if (existItem.count === 1) {
            const newCart = state.cart.filter((item) => item._id !== _id);
            state.cart = newCart;
          }
          state.totalCartItems -= 1;
          state.totalPrice = Number(
            (state.totalPrice - existItem.price).toFixed(2)
          );
        } else {
          existItem.count += 1;
          state.totalCartItems += 1;
          state.totalPrice = Number(
            (state.totalPrice + existItem.price).toFixed(2)
          );
        }
      }
    },
    removeACartItem(state, action: PayloadAction<{ _id: string }>) {
      const { _id } = action.payload;
      const removedCartItem = state.cart.find((item) => item._id === _id);
      if (removedCartItem) {
        const otherCartItems = state.cart.filter((item) => item._id !== _id);
        state.cart = [...otherCartItems];
        state.totalCartItems -= removedCartItem?.count;
        state.totalPrice -= removedCartItem?.count * removedCartItem?.price;
      }
    },
    clearAllCart(state) {
      state.cart = [];
      state.totalCartItems = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addCartItem, updateCartCount, removeACartItem, clearAllCart } =
  cartSlice.actions;

export const getCartInfos = (state: RootState) => state.carts.cart;
export const getCartCounts = (state: RootState) => state.carts.totalCartItems;
export const getTotalCartPrice = (state: RootState) => state.carts.totalPrice;

export default cartSlice.reducer;
