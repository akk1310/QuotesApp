import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from '../fetures/quotes/quoteSlice';

export const store=configureStore({
    reducer:quoteReducer
})