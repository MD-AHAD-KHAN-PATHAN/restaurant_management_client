
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const PrivateRoute = ({children}) => {

    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading){
        return <section className="min-h-screen flex justify-center items-center"><progress className="progress w-56"></progress></section>
    }

    if(user){
        return children
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>


};

export default PrivateRoute;