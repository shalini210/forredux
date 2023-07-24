import { createSlice } from "@reduxjs/toolkit";
let d="pending work ";
// await fetch('http://localhost:8080/teacher/')
//       .then(response => response.json())
//       .then(json => {d=json})
const initialState ={
    amount:1000,
    data1:d,
    counter:0
    
}
export const amountSlice =createSlice( {
    name:'amount',
    initialState,
    reducers:{
        increment:(state)=>
        {
            state.counter+=1;
        },
        decrement:(state)=>
        {
            state.counter-=1
        },


        deposite:(state,action)=>
        {
            state.amount = state.amount +parseInt(action.payload);
        },
        withdraw:(state,action)=>
        {
            state.amount=state.amount -parseInt(action.payload);
        }
        // deposite:(state)=>
        // {
        //     state.amount = state.amount +100;
        // },
        // withdraw:(state)=>
        // {
        //     state.amount=state.amount -100;
        // }
    }
})
export const {deposite,withdraw} = amountSlice.actions
export const {increment,decrement} =amountSlice.actions
export default amountSlice.reducer