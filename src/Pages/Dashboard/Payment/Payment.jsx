import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";
import useCart from "../../../Hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);

const Payment = () => {

    const [cart] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0);
    const totalPrice = parseInt(total.toFixed(2))

    return (

        <div>
            <SectionTitle heading="Please pay to eat" subHeading="Payment"></SectionTitle>

            <div>
                <Elements stripe={stripePromise}>
                    <CheckOut totalPrice={totalPrice}></CheckOut>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;