import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};


const url = "https://course-api.com/react-useReducer-cart-project"

export const getCartItems = createAsyncThunk('cart/getCartItmes', async () => {
  try{
    const resp = await axios(url)
    // console.log(resp)
    return resp.data;
  } catch (error) {
    console.log(error);
  }
})

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
  },

  extraReducers: {
		[getCartItems.pending]:(state)=>{
			state.isLoading = true
		},
		[getCartItems.fulfilled]:(state, actions)=>{
			state.isLoading = false;
      state.cartItems = actions.payload
		},
		[getCartItems.rejected]:(state)=>{
			state.isLoading = false
		},
	}
}); 

export const { clearCart, removeItem, increment, decrememnt, total } = cartSlice.actions

export default cartSlice.reducer