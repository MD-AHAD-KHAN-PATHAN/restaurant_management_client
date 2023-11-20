import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/cart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import AdminRouts from "./AdminRouts/AdminRouts";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/order/:category',
                element: <Order></Order>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            // Normal Users Route
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            // Admin Routes
            {
                path: 'addItems',
                element: <AdminRouts><AddItem></AddItem></AdminRouts>
            },
            {
                path: 'manageItems',
                element: <AdminRouts><ManageItems></ManageItems></AdminRouts>
            },
            {
                path: 'users',
                element: <AdminRouts><AllUsers></AllUsers></AdminRouts>
            }
        ]
    }
]);

export default Routes;