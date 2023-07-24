import { configureStore } from "@reduxjs/toolkit";
import colorREducer from './coloroptions/redSlice';
import bankreducer from './slices/amountSlice'
export const  storetool = configureStore(
    {
        reducer:{
            color:colorREducer,
            bank1:bankreducer
            // user:
        }
    }
)