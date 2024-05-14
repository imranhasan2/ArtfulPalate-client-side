

const SingleFoodPage = () => {
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md md:max-w-2xl">
            <img className="w-full h-64 object-cover" src={food.image} alt={food.name} />
            <div className="p-4">
                <div className="font-bold text-xl mb-2">{food.name}</div>
                <p className="text-gray-700 text-base mb-2">Category: {food.category}</p>
                <p className="text-gray-700 text-base mb-2">Price: ${food.price}</p>
                <p className="text-gray-700 text-base mb-2">Made By: {food.madeBy}</p>
                <p className="text-gray-700 text-base mb-2">Origin: {food.origin}</p>
                <p className="text-gray-700 text-base mb-2">{food.description}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Purchase
                </button>
            </div>
        </div>
    );
};

export default SingleFoodPage;