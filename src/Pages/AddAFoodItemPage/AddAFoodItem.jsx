import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const AddAFoodItem = () => {

    const { user } = useContext(AuthContext)

    const handleAddAFood = e => {
        e.preventDefault()
        const form = e.target;
        const foodName = form.foodName.value;
        const foodImg = form.foodImage.value;
        const foodCategory = form.foodCategory.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const userName = user.displayName;
        const email = user.email;
        const foodOrigin = form.foodOrigin.value;

        const foodDescription = form.foodDescription.value
        console.log(foodName, foodImg, foodCategory, quantity, price, userName, email, foodOrigin, foodDescription)

        const addedItem = { foodName, foodImg, foodCategory, quantity, price, userName, email, foodOrigin, foodDescription }


        fetch('http://localhost:5000/addFood', {
            method: "POST",
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(addedItem)

        }).then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    title: 'success',
                    text: 'you have successfully added Food item',
                    icon: 'success',
                    confirmButtonText: 'ok'
                    
                  })
                  form.reset()
                  
            })




    }





    return (
        <div className="container mx-auto p-8 bg-white bg-opacity-25 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-4">Add New Food Item</h2>
            <form onSubmit={handleAddAFood} className="space-y-4">
                <div>
                    <label htmlFor="foodName" className="block font-semibold">Food Name</label>
                    <input type="text" id="foodName" name="foodName" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" required />
                </div>
                <div>
                    <label htmlFor="foodImage" className="block font-semibold">Food Image URL</label>
                    <input type="url" id="foodImage" name="foodImage" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" required />
                </div>
                <div>
                    <label htmlFor="foodCategory" className="block font-semibold">Food Category</label>
                    <input type="text" id="foodCategory" name="foodCategory" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" required />
                </div>
                <div>
                    <label htmlFor="quantity" className="block font-semibold">Quantity</label>
                    <input type="number" id="quantity" name="quantity" min="1" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" required />
                </div>
                <div>
                    <label htmlFor="price" className="block font-semibold">Price</label>
                    <input type="number" id="price" name="price" min="0" step="0.01" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" required />
                </div>
                {/* Add By (name & email) will be automatically filled from the logged-in user */}


                <div className="flex items-center space-x-4">
                    <div className="w-full">
                        <label className="block font-semibold">Add By Name</label>
                        <input type="text" defaultValue={user?.displayName} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" readOnly />
                    </div>



                    <div className="w-full">
                        <label htmlFor="foodCategory" className="block font-semibold">Email</label>
                        <input type="email" defaultValue={user?.email} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" readOnly />
                    </div>


                </div>
                <div>
                    <label htmlFor="foodOrigin" className="block font-semibold">Food Origin (Country)</label>
                    <input type="text" id="foodOrigin" name="foodOrigin" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" required />
                </div>
                <div>
                    <label htmlFor="foodDescription" className="block font-semibold">Description</label>
                    <textarea id="foodDescription" name="foodDescription" rows="4" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" required></textarea>
                </div>
                <div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Add Food Item</button>
                </div>
            </form>
        </div>

    );
};

export default AddAFoodItem;