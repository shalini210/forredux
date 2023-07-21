import { configureStore } from "@reduxjs/toolkit";
import colorREducer from './coloroptions/redSlice'
export const  storetool = configureStore(
    {
        reducer:{
            color:colorREducer,
            // user:
        }
    }
)