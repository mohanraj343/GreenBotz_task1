import { useNavigate } from "react-router";

export default function HomeLayout({children}){
    const navigate =useNavigate();
    return <div style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    }}>
        <div style={{
            width : "20%",
            height : "100vh",
            display:"flex",
            flexDirection:"column"
        }}>
            <button onClick={()=>{
                navigate("/dashboard")
            }}>dashboard</button>
            <button onClick={()=>{
                navigate("/report")
            }}>Report</button>
            <button onClick={()=>{
                navigate("/news")
            }}>News</button>
            <button onClick={()=>{
                localStorage.removeItem("user");
                navigate("/")
            }}>Logout</button>

<button onClick={()=>{
                localStorage.clear();
                navigate("/")
            }}>clear DB</button>

        </div>
        <div style={{
            minHeight:"100vh",
            width : "80%",
            padding:"20px",
        
        }}>
            {children}
        </div>
    </div>
}