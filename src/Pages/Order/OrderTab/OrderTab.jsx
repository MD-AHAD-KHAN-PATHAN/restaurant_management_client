import FoodCard from "../../Shared/FoodCard/FoodCard";


const OrderTab = ({items}) => {

    return (
        <div className="grid grid-cols-3 gap-10 my-16 px-20">
            {
                items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;