import {  FaBookmark, FaCalendar, FaHome, FaSearch, FaShoppingCart, FaStar } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="flex">
            <div className="w-60 min-h-screen bg-orange-600">
                <ul className="menu">
                    <li><NavLink to="/dashboard/userHome"> <FaHome></FaHome>User Home</NavLink></li>
                    <li><NavLink to="/dashboard/reservation"> <FaCalendar></FaCalendar>Reservation</NavLink></li>
                    <li><NavLink to="/dashboard/cart"> <FaShoppingCart></FaShoppingCart>My Cart ({cart.length})</NavLink></li>
                    <li><NavLink to="/dashboard/review"> <FaStar></FaStar>Add Review</NavLink></li>
                    <li><NavLink to="/dashboard/booking"> <FaBookmark></FaBookmark>My Booking</NavLink></li>

                    <div className="divider"></div>

                    <li><NavLink to="/"> <FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to="/order/salad"> <FaSearch></FaSearch>Menu</NavLink></li>

                </ul>

            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Dashboard;