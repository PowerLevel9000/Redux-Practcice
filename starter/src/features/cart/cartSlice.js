import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../../cartItems'

const initialState = {
  cartItems: cartItems,
  amount: cartItems.length,
  total: 0,
  isLoading: true,
};

console.log(initialState.price)

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = []
      state.amount = 0
    },
    removeItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(item => item.id !== payload);
      state.amount -= 1
    },
    increment: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload);
      cartItem.amount += 1;
    },
    decrememnt: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload);;
      cartItem.amount -= 1;
    },
    total: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach(item => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    }
  }
});

// console.log(cartSlice)

export const { clearCart, removeItem, increment, decrememnt, total } = cartSlice.actions

export default cartSlice.reducer