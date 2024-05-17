import { useState } from "react";
import classes from "./auth.module.css"
import { useNavigate } from "react-router";


export default function Signup(){
    const navigate= useNavigate();
    const [userData, setUserData] = useState({
        username : "",
        password : "",
        email:""
    });

    const handlechange = (e, type)=>{
        if(type===1){
            setUserData((pre)=>({
                ...pre,
                username:e.target.value || ""
            }));
            return
        }
        if(type===2){
            setUserData((pre)=>({
                ...pre,
                email:e.target.value || ""
            }));
            return
        }
        setUserData((pre)=>({
            ...pre,
            password:e.target.value || ""
        }));
    
    }

    const handleSubmit =()=>{
        if(userData?.username && userData?.password && userData?.email){
            localStorage.setItem("user_data", JSON.stringify(userData));
            localStorage.setItem("user", JSON.stringify(userData));

            navigate("/")
            return
        }
        alert("Please fill all the fields")
    }
    return <div className="container">
       <form onSubmit={handleSubmit}>

       <div className={classes.container}>
       <h3>Signup</h3>
       <input type="text" placeholder="Enter user name" onChange={(e)=>{
        handlechange(e, 1)
       }} />
        <input type="text" placeholder="Enter Email" onChange={(e)=>{
        handlechange(e, 2)
       }} />
         <input type="password" placeholder="Enter Password" onChange={(e)=>{
        handlechange(e, 3)
       }} />

<p style={{
        textDecoration:"underline",
        cursor:"pointer"
       }} onClick={()=>{
        navigate("/")
       }}>back to signin</p>
       <button type="submit">submit</button>
       </div>
       </form>

    </div>
}