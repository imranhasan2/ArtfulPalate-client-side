import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const FoodPurchase = () => {

    const { user } = useContext(AuthContext)
    const loadedData = useLoaderData()
    const { foodName, quantity, price, } = loadedData;


    const handlePurchase = e => {
        e.preventDefault()


        const from = e.target;

        const food = from.foodName.value
        const price = from.price.value;
        const quantity = from.quantity.value;
        const userName = user?.displayName;
        const email = user?.email
        console.log(food, price, quantity, userName, email)






        fetch('http://localhost:5000/purchase', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    title: 'success',
                    text: 'you have successfully Purchase a Item',
                    icon: 'success',
                    confirmButtonText: 'ok'

                })
            })

    }



    return (
        <div className="container mx-auto p-8 bg-white bg-opacity-25 rounded-lg shadow-lg">
            <Helmet>
                <title>Purchase || Food King</title>
                <meta name="description" content="Description of my page" />
                {/* Other meta tags */}
            </Helmet>
            <h2 className="text-2xl font-bold text-center mb-4">Food Purchase Page</h2>
            <form onSubmit={handlePurchase} className="space-y-4">
                <div>
                    <label htmlFor="foodName" className="block font-semibold">Food Name</label>
                    <input type="text" id="foodName" name="foodName" defaultValue={foodName} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" readOnly />
                </div>
                <div>
                    <label htmlFor="foodImage" className="block font-semibold">Food Price</label>
                    <input type="url" id="foodImage" name="price" defaultValue={price} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" readOnly />
                </div>
                <div>
                    <label htmlFor="foodCategory" className="block font-semibold">Quantity</label>
                    <input type="text" defaultValue={quantity} name="quantity" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" required />
                </div>
                <div>
                    <label htmlFor="quantity" className="block font-semibold">Buyer Name</label>
                    <input type="text" id="quantity" defaultValue={user?.displayName} min="1" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" readOnly />
                </div>
                <div>
                    <label htmlFor="price" className="block font-semibold">Buyer Email</label>
                    <input type="email" defaultValue={user?.email} min="0" step="0.01" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" readOnly />
                </div>
             

                <div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Purchase</button>
                </div>
            </form>
        </div>
    );
};

export default FoodPurchase;