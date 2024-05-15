import { Link, Navigate, useLoaderData } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";


const SingleFoodPage = () => {

    const { user } = useContext(AuthContext)

    const loadedData = useLoaderData();
    const { _id, foodName, foodImg, foodCategory, price, userName, foodOrigin, foodDescription } = loadedData;
    return (
        <div className="hero min-h-screen bg-gray-200 mb-5">
            <Helmet>
                <title>SingleFood</title>
                <meta name="description" content="Description of my page" />
                {/* Other meta tags */}
            </Helmet>
            <div className="hero-content flex-col lg:flex-row">
                <img src={foodImg} className="w-[400px] rounded-lg " />
                <div className="flex items-center justify-center lg:justify-start">
                    <div className="max-w-md mx-auto rounded-xl overflow-hidden  md:max-w-2xl">
                        <div className="p-6">
                            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">{foodName}</h1>
                            <p className="text-gray-700 text-base mb-2">Category: <span className="font-semibold">{foodCategory}</span></p>
                            <p className="text-gray-700 text-base mb-2">Price: <span className="font-semibold">${price}</span></p>
                            <p className="text-gray-700 text-base mb-2">Made By: <span className="font-semibold">{userName}</span></p>
                            <p className="text-gray-700 text-base mb-2">Origin: <span className="font-semibold">{foodOrigin}</span></p>
                            <p className="text-gray-700 text-base mb-4">{foodDescription.slice(0, 50)}</p>
                            {
                                user ? <Link to={`/foodPurchase/${_id}`}>
                                    <button className="bg-blue-500 flex hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full">
                                        <MdOutlineShoppingCart className="mr-3 " size={28}></MdOutlineShoppingCart> Purchase
                                    </button>
                                </Link> : <Navigate to={'/login'}></Navigate>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default SingleFoodPage;