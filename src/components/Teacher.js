import { useEffect, useState } from "react"

export default function()
{
    const [Teachers,setTeachers]=useState([]);
    const [Teachersdata,setTeachersData]=useState([]);
    useEffect( ()=>
    {
        fetch("http://localhost:8080/teacher/")
        .then((response)=>response.json())
        .then( (data)=>
        {
            console.log(data);      
            const DisplayData=data.data.map(
            (info)=>{
                return(
                    <tr>
                        <td>{info.tage}</td>
                        <td>{info.tname}</td>
                        <td>{info.tcity}</td>
                    </tr>
                )
            }
        )
        setTeachers(DisplayData)  
        })
        .catch((err)=>console.log(err))
    },[]);
// use effect end
const addTeacher = async(name,age,city)=>
{
    console.log(name,age,city)
    await fetch("http://localhost:8080/teacher/",
    {
        method:'Post',
        body:JSON.stringify({
            tname:name,
            tage:age,
            tcity:city,
        }),
        headers:
        {
            'Content-type':'application/json',
        },
    })
    .then((response)=>response.json())
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
}

    return(
        <>
        <h4>we will consume api here</h4>
        {JSON.stringify(Teachers.data)}
        <table>
            <tr>
                <th>Name</th>
                 <th>City</th>
                 <th>Age</th>
            </tr>
         
         {Teachers}
        </table>
        <input type="button" value="Add Teacher" onClick={()=>addTeacher("Suraj",35,"Delhi")}/>
        </>
    )
}