import { FaTrashAlt } from "react-icons/fa";

const CartTable = ({item, idx}) => {

    const {image, name, price} = item;

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
                    <button className="btn btn-ghost btn-md text-xl text-red-700"> <FaTrashAlt></FaTrashAlt> </button>
                </th>
            </tr>
    );
};

export default CartTable;