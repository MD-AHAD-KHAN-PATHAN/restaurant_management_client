import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";

const FoodCard = ({ item }) => {

    const { _id, image, name, recipe, price } = item;

    const { user } = useAuth();
    const [, refetch] = useCart();

    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();

    const handleAddToCart = () => {

        if (user && user?.email) {

            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price,
            }

            axiosSecure.post('/carts', cartItem)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to your cart`,
                        showConfirmButton: false,
                        timer: 2000
                      });
                      refetch()
                }
            })
        }
        else {
            Swal.fire({
                title: "You are not logged In",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login !"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    }

    return (
        <div className="bg-base-100 shadow-xl relative">
            <figure className="">
                <img src={image} alt="Shoes" />
            </figure>
            <p className="absolute bg-slate-900 font-bold right-2 top-2 p-2 rounded-md text-white">${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button onClick={handleAddToCart} className="btn btn-outline text-white border-0 border-b-4 mt-4 uppercase">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;