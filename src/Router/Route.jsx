import { createBrowserRouter } from "react-router-dom";
import Index from "../Components/IndexPage/Index";
import Phone from "../Components/PhonePage/Phone";
import Login from "../Components/signIn/Login";
import Register from "../Components/signIn/Register";
import MainPage from "../MainPage/MainPage";
import PrivateRoute from "./Private/PrivateRoute";


const route = createBrowserRouter([
    {
        path: '/',
        element: <MainPage></MainPage>,
        children: [
            {
                path: '/',
                element: <Index></Index>
            },
            {
                path: '/home',
                element: <Index></Index>
            },
            {
                path: '/phone/:id',
                loader:({params})=>fetch(`http://localhost:5000/phoneCategori/${params.id}`),
                element: <PrivateRoute><Phone></Phone></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
           
        ],
    },
    

])
export default route;