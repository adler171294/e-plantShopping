// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './components/CartSlice'; // Sesuaikan path jika berbeda

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store;