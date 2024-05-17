import { createBrowserRouter } from "react-router-dom";
import Login from "../Layouts/Auth/Login";
import Signup from "../Layouts/Auth/Signup";
import Dashboard from "../Layouts/Home/Dashboard";
import News from "../Layouts/Home/News";
import Report from "../Layouts/Home/Report";
import { AuthPrivateRouter, HomePrivateRouter } from "./PrivateRouter/PrivateRouter";

export const Router = createBrowserRouter([{
    path:"/",
    element : <AuthPrivateRouter />,
    children : [{
        index:true,
        element : <Login />
    }, {
        path : "signup",
        element : <Signup />
    }]
}, {
    path : "/",
    element: <HomePrivateRouter />,
    children: [{
        path:"dashboard",
        element : <Dashboard />
    }, {
        path : "report",
        element : <Report />
    }, {
        path : "news",
        element : <News />
    }]
},{
    path:"*",
    element:<div>page not found</div>
}])