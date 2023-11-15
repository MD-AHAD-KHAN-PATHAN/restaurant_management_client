

const MenuItem = ({ item }) => {
    const { image, name, recipe, price } = item;

    return (
        <div className="flex justify-between items-center gap-4 space-y-2">
            <div>
                <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-28" src={image} alt="" />
            </div>
            <div>
                <h1 className="text-2xl font-bold">{name} ---------</h1>
                <p>{recipe}</p>
            </div>
            <div>
                <h2 className="text-yellow-600 font-semibold">${price}</h2>
            </div>
        </div>
    );
};

export default MenuItem;