import { createBrowserRouter } from "react-router-dom";
import Allusers from "../Components/DashBoard/Allusers";
import AddProductSeller from "../Components/DashBoard/seller/AddProductSeller";
import Order from "../Components/DashBoard/seller/Order";
import Seller from "../Components/DashBoard/seller/Seller";
import Index from "../Components/IndexPage/Index";
import Phone from "../Components/PhonePage/Phone";
import Login from "../Components/signIn/Login";
import Register from "../Components/signIn/Register";
import WishList from "../Components/wishList/WishList";
import DashBoardLayout from "../MainPage/DashBoardLayout";
import MainPage from "../MainPage/MainPage";
import PrivateRoute from "./Private/PrivateRoute";
import SellerRoute from "./Private/SellerRoute";


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
                path: '/phone/:brand',
                loader: ({ params }) => fetch(`http://localhost:5000/phones/${params.brand}`),
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
            {
                path: '/wistlist',
                element: <WishList></WishList>
            },

        ],
    },
    {
        path: '/dashboard',
        element: <DashBoardLayout></DashBoardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <Allusers></Allusers>
            },

            {
                path: '/dashboard/seller',
                element: <SellerRoute><Seller></Seller></SellerRoute>
            },
            {
                path: '/dashboard/seller/input',
                element: <SellerRoute><AddProductSeller></AddProductSeller></SellerRoute>
            },
            {
                path: '/dashboard/seller/ordered',
                element: <SellerRoute><Order></Order></SellerRoute>
            },

        ]
    }

])
export default route;