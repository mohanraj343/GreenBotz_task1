import { Navigate, Outlet } from "react-router"
import HomeLayout from "../../Layouts/Home/HomeLayout"

export const AuthPrivateRouter = ()=>{
    return localStorage.getItem("user_data") && localStorage.getItem("user") ? <Navigate to={"/dashboard"} /> : <Outlet />
}

export const HomePrivateRouter = ()=>{
    return !localStorage.getItem("user")  ? <Navigate to={"/"} /> : <HomeLayout><Outlet /></HomeLayout>
}