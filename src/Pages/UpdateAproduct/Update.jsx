import { useLoaderData } from "react-router-dom";


const Update = () => {

    const loadedData = useLoaderData()
    console.log(loadedData)

const {_id,foodName,foodImg,quantity,userName,email,foodDescription,
foodCategory,foodOrigin,price} =loadedData


const handleUpdate = e =>{
    e.preventDefault()
    const form =e.target;
    const foodName = form.foodName.value;
    const price =form.price.value;
    const foodCategory =form.foodCategory.value;
    const foodOrigin = form.foodOrigin.value;
    const update ={foodName,foodCategory,foodOrigin,price}
    // console.log(update)


    fetch(`http://localhost:5000/myFood/${_id}`,{
        method: "PUT",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify(update)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
    })
}

    return (
        <div className="container mx-auto p-8 bg-white bg-opacity-25 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-4">Update A item</h2>
            <form  onSubmit={handleUpdate} className="space-y-4">
                <div>
                    <label htmlFor="foodName" className="block font-semibold">Food Name</label>
                    <input type="text" id="foodName" defaultValue={foodName} name="foodName" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" required />
                </div>
               
                <div>
                    <label htmlFor="foodCategory" className="block font-semibold">Food Category</label>
                    <input type="text" id="foodCategory" defaultValue={foodCategory} name="foodCategory" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" required />
                </div>
               
                <div>
                    <label htmlFor="price" className="block font-semibold">Price</label>
                    <input type="number" id="price" defaultValue={price} name="price" min="0" step="0.01" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" required />
                </div>
                {/* Add By (name & email) will be automatically filled from the logged-in user */}


                <div className="flex items-center space-x-4">


                </div>
                <div>
                    <label htmlFor="foodOrigin" className="block font-semibold">Food Origin (Country)</label>
                    <input type="text" id="foodOrigin" defaultValue={foodOrigin} name="foodOrigin" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" required />
                </div>
                
                <div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Update Product </button>
                </div>
            </form>
        </div>
    );
};

export default Update;