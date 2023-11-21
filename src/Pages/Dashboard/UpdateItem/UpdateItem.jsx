import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const img_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

const UpdateItem = () => {

    const { _id, name, category, recipe, price } = useLoaderData();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const { register, handleSubmit} = useForm();
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

            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data);
            if (menuRes.data.modifiedCount > 0) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is updated to the menu`,
                    showConfirmButton: false,
                    timer: 2000

                });
            }
        }

    }

    return (
        <div>
            <SectionTitle heading="Update info" subHeading="Update an Item"></SectionTitle>
            <div className="mx-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>Recipe Name</label>
                        <input {...register("name", { required: true })} type="text" placeholder="Type here" defaultValue={name} className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-5 my-5">
                        <div className="w-full">
                            <label>Category Name</label>
                            <select defaultValue={category} {...register("category", { required: true })} className="select select-bordered w-full">
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
                            <input {...register("price", { required: true })} type="number" placeholder="Type here" defaultValue={price} className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Recipe Details</span>
                            </label>
                            <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" defaultValue={recipe} placeholder="Type here"></textarea>

                        </div>
                    </div>
                    <div className="my-5">
                        <input {...register("image", { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <button className="btn">Update Recipe Details</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;