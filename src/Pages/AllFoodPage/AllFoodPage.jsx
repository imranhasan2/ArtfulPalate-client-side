import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { IoIosArrowDroprightCircle } from "react-icons/io";


const AllFoodPage = () => {

    const [allFoods, setAllFood] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/addFood')
            .then(res => res.json())
            .then(data => {
                setAllFood(data)
            })
    }, [])
    return (
        <div className="mb-5 mt-5">
            <Helmet>
                <title>All Food || Food King</title>
                <meta name="description" content="Description of my page" />
                {/* Other meta tags */}
            </Helmet>
            <div className="relative">
                <img className="rounded-lg" src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/breadcrumb-1.jpg" alt="" />

                <div className="absolute transform -translate-x-1/2  -translate-y-1/2  top-1/2 left-1/2">
                    <p className=" text-5xl font-extrabold text-white ">All FOODS </p>
                    <p className=" text-xl font-extrabold text-yellow-400 ml-10 flex items-center">Home <IoIosArrowDroprightCircle></IoIosArrowDroprightCircle> All Food </p>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-5 gap-5">
                {allFoods.map(allFood =>

                    <div key={allFood._id} className="max-w-xs rounded-md hover:bg-yellow-500 shadow-md  dark:text-gray-800 p-4">
                        <img src={allFood.foodImg} alt="" className="object-cover object-center w-full rounded-t-md h-72 " />
                        <div className="flex flex-col justify-between p-6 space-y-8  ">
                            <div className="space-y-2">

                                <h2 className="text-xl text-center font-medium">{allFood.price}$</h2>
                                <h2 className="text-2xl  font-semibold tracking-wide">{allFood.foodName}</h2>


                                <h2 className="text-xl"><span className="text-2xl">Category </span>:{allFood.foodCategory} </h2>

                            </div>
                            <p className="text-lg"><span className="font-semibold">Quantity:</span> {allFood.quantity}</p>

                        </div>
                        <Link to={`/singleFoodPage/${allFood._id}`}>
                            <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Details</button>
                        </Link>
                    </div>

                )}
            </div>



        </div>
    );
};

export default AllFoodPage;