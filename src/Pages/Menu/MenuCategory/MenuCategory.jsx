import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ item, title, img, description }) => {
    return (
        <div>
            {title && <Cover img={img} title={title} description={description}></Cover>}
            <div className="grid grid-cols-2 gap-10 my-16 px-20">
                {
                    item.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>

            <Link to={`/order/${title}`}>
                <button className="btn btn-outline text-white border-0 border-b-4 mt-4">Order Now</button>

            </Link>
        </div>

    );
};

export default MenuCategory;