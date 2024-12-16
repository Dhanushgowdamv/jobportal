/* eslint-disable no-undef */
import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice.js'
import jobSlice from './jobSlice.jsx'
const store = configureStore({
    reducer:{
        auth:authSlice,
        job:jobSlice,


    }
});

export default store;