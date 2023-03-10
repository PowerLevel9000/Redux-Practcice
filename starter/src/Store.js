import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cart/cartSlice'

// import './features/cart/cartSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: ''
    }
})