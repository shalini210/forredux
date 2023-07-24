import { useDispatch,useSelector } from "react-redux";
import { withdraw,deposite } from "./slices/amountSlice";
import { useRef } from "react";
export default function()
{
    const amount = useSelector((state)=>state.bank1.amount)
    const color1 = useSelector((state)=>state.color.colorname)
    const data = useSelector((state)=>state.bank1.data1)
    console.log(data)
    const a = useRef(0)
    const dispatch = useDispatch();
    return(
        <>
        <h1 style={{color:color1}}>current balance: {amount}</h1>
        <p>
            Enter amount : <input type="number" ref={a}/>
        </p>
        <input type="button" value="withdraw" onClick={()=>dispatch(withdraw(a.current.value))}/>
        <input type ="button" value="deposit" onClick={()=>dispatch(deposite(a.current.value))}/>
        </>
    )

}