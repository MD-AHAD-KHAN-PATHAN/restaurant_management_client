import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })

    return (
        <div>
            <SectionTitle heading="Payment Information" subHeading="Payments"></SectionTitle>
            <div>
                <h3 className="text-2xl font-semibold text-center">Total Payments : {payments?.length}</h3>
                <div className="overflow-x-auto ml-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>PRICE</th>
                            <th>TRANSACTION ID</th>
                            <th>STATUS</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments?.map((payment, indx) => <tr key={payment._id}>
                                <th>{indx + 1}</th>
                                <td>{payment.price}</td>
                                <td>{payment.transactionId}</td>
                                <td>{payment.status}</td>
                                
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            </div>
        </div>
    );
};

export default PaymentHistory;