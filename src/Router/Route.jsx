import { createBrowserRouter } from "react-router-dom";
import Index from "../Components/IndexPage/Index";
import MainPage from "../MainPage/MainPage";


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
            // {
            //     path: '/login',
            //     element: <Login></Login>
            // },
            // {
            //     path: '/register',
            //     element: <Register></Register>
            // },
           
        ],
    },
    

])
export default route;