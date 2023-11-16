import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {

    const { googleLogin } = useAuth();

    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {

            console.log(result.user.email);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data);
                navigate('/');
            })

        })
    }
    return (
        <div>
            <div className="divider"></div>
            <div className=" flex justify-center pb-4">
                <button onClick={handleGoogleLogin} className="btn bg-orange-600"><FaGoogle></FaGoogle>Google</button>
            </div>

        </div>
    );
};

export default SocialLogin;