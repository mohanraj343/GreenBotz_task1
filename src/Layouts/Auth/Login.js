import { useState } from "react"
import classes from "./auth.module.css"
import { useNavigate } from "react-router";

export default function Login(){
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        username : "",
        password : ""
    });

    const handlechange = (e, type)=>{
        if(type===1){
            setUserData((pre)=>({
                ...pre,
                username:e.target.value || ""
            }));
            return
        }

        setUserData((pre)=>({
            ...pre,
            password:e.target.value || ""
        }));
    }

    const handleSubmit =()=>{
        if(!localStorage?.getItem("user_data")){
            alert("you dont have account need to signup");
            return
        }
        const localdata = JSON.parse(localStorage?.getItem("user_data") || "");
        if(userData?.username && userData?.password){
            if(localdata?.username === userData?.username && localdata?.password === userData?.password){
                navigate("/dashboard");
            }
            else{
                alert("need to signup");
                return
            }
            localStorage.setItem("user", JSON.stringify(userData));
         
            return
        }
        alert("Please fill all the fields")
        
     
    }
    return <div className="container">
       <form onSubmit={handleSubmit}>

       <div className={classes.container}>
       <h3>Login</h3>
       <input type="text" placeholder="Enter user name" onChange={(e)=>{
        handlechange(e, 1)
       }} />
         <input type="password" placeholder="Enter Password" onChange={(e)=>{
        handlechange(e, 2)
       }} />
       <p style={{
        textDecoration:"underline",
        cursor:"pointer"
       }} onClick={()=>{
        navigate("/signup")
       }}>Not have an accounty signup?</p>
       <button type="submit" >submit</button>
       </div>
       </form>

    </div>
}