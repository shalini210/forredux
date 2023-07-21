import { createSlice } from "@reduxjs/toolkit";
// import createSlice fro
const initialState={
    colorname:'red',
    fs:'25px'
    // here 
}
export const redSlice=createSlice({
    name:'color',
    initialState,
    reducers:{
        red:(state)=>{
            state.colorname ='red';
            state.fs="30px"
        },
        green:(state)=>
        {
            state.colorname='green';
            state.fs='45px'
        },
        yellow:(state)=>
        {
            state.colorname='yellow';
            state.fs='100px'
        }
    }
})
export const {green,red,yellow} = redSlice.actions
export default redSlice.reducer