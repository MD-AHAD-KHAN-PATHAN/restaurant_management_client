import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CheckOut = ({totalPrice}) => {

    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [error, setError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const navigate = useNavigate();

    const axiosSecure = useAxiosSecure();
    const [cart, refetch] = useCart();

    useEffect(() => {
        if(totalPrice > 0){
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
        }
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setError(error.code);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('');
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        });

        if(confirmError){
            console.log('confirm error');
        }
        else {
            console.log('payment intent', paymentIntent);
            if(paymentIntent.status === 'succeeded'){
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                // now save the payment in the database.
                const paymentInfo = {
                    email: user?.email,
                    name: user?.displayName,
                    transactionId: paymentIntent.id,
                    price: totalPrice,
                    date: new Date(),
                    cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuId),
                    status: 'pending'
                }

                const res = await axiosSecure.post('/payments', paymentInfo);
                console.log(res.data);
                refetch();
                if(res.data?.result?.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: 'Your payment is successfull.',
                        showConfirmButton: false,
                        timer: 2000

                    });
                    navigate('/dashboard/paymentHistory');
                }

            }
        }

    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <p className="text-red-600">{error}</p>

            <button className="btn btn-error mt-4" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            {
                transactionId && <p className="text-green-600">Transaction Id is {transactionId}</p>
            }
        </form>
    );
};

export default CheckOut;