import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const CartTable = ({ item, idx, refetch }) => {

    const { _id, image, name, price } = item;

    const axiosSecure = useAxiosSecure()

    const handleDelete = (id) => {


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your data has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }

    return (
        <tr>
            <td>{idx + 1}</td>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {name}
            </td>
            <td>$ {price}</td>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-md text-xl text-red-700"> <FaTrashAlt></FaTrashAlt> </button>
            </th>
        </tr>
    );
};

export default CartTable;