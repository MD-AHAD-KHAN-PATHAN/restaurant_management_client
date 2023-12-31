import { FaBook, FaBookmark, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaStar, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart();

    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            <div className="w-60 min-h-screen bg-orange-600">
                <ul className="menu">
                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/adminHome"> <FaHome></FaHome>Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/addItems"> <FaUtensils></FaUtensils>Add Items</NavLink></li>
                            <li><NavLink to="/dashboard/cart"> <FaShoppingCart></FaShoppingCart>My Cart ({cart.length})</NavLink></li>
                            <li><NavLink to="/dashboard/paymentHistory"> <FaCalendar></FaCalendar>Payment History</NavLink></li>
                            <li><NavLink to="/dashboard/manageItems"> <FaList></FaList> Manage Items</NavLink></li>
                            <li><NavLink to="/dashboard/manageBookings"> <FaBook></FaBook>Manage Bookings</NavLink></li>
                            <li><NavLink to="/dashboard/Users"> <FaUsers></FaUsers> All Users</NavLink></li>
                        </> : <>
                            <li><NavLink to="/dashboard/userHome"> <FaHome></FaHome>User Home</NavLink></li>
                            <li><NavLink to="/dashboard/paymentHistory"> <FaCalendar></FaCalendar>Payment History</NavLink></li>
                            <li><NavLink to="/dashboard/cart"> <FaShoppingCart></FaShoppingCart>My Cart ({cart.length})</NavLink></li>
                            <li><NavLink to="/dashboard/review"> <FaStar></FaStar>Add Review</NavLink></li>
                            <li><NavLink to="/dashboard/booking"> <FaBookmark></FaBookmark>My Booking</NavLink></li>
                        </>
                    }


                    {/* Shared nav links */}
                    <div className="divider"></div>

                    <li><NavLink to="/"> <FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to="/order/salad"> <FaSearch></FaSearch>Menu</NavLink></li>
                    <li><NavLink to="/order/contact"> <FaEnvelope></FaEnvelope>Contact</NavLink></li>

                </ul>

            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;