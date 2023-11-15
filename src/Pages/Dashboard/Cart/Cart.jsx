import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useCart from "../../../Hooks/useCart";
import CartTable from "./CartTable";

const Cart = () => {
    const [cart, refetch] = useCart();

    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div>
            <SectionTitle heading="My Cart" subHeading="wanna add more?"></SectionTitle>
            <div>
                <div className="flex justify-evenly mb-10">
                    <h1 className="text-2xl font-bold">Total Items : {cart.length}</h1>
                    <h1 className="text-2xl font-bold">Total Price : {totalPrice} $</h1>
                    <button className="btn bg-orange-600">Pay</button>
                </div>
                <div className="">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>ITEM IMAGE</th>
                                    <th>ITEM NAME</th>
                                    <th>PRICE</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map((item, idx) => <CartTable idx={idx} key={item._id} item={item} refetch={refetch}></CartTable>)
                                }
                                
                            </tbody>                           
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;