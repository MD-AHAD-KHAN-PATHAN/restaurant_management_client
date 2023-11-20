import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

const AddItem = () => {

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {

        const imageFile = { image: data.image[0] };

        const res = await axiosPublic.post(img_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }

            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data);
            if(menuRes.data.insertedId) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu`,
                    showConfirmButton: false,
                    timer: 2000

                });
            }
        }

    }

    return (
        <div className="ml-20">

            <SectionTitle heading="What's new" subHeading="add an item"></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>Recipe Name</label>
                        <input {...register("name", { required: true })} type="text" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-5 my-5">
                        <div className="w-full">
                            <label>Category Name</label>
                            <select defaultValue="default" {...register("category", { required: true })} className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        <div className="w-full">
                            <label>Price</label>
                            <input {...register("price", { required: true })} type="number" placeholder="Type here" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Recipe Details</span>
                            </label>
                            <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Type here"></textarea>

                        </div>
                    </div>
                    <div className="my-5">
                        <input {...register("image", { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <button className="btn">Add Item <FaUtensils className="ml-2"></FaUtensils></button>
                </form>
            </div>
        </div>
    );
};

export default AddItem;