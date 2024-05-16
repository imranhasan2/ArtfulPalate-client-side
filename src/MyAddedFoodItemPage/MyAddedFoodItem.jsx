import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { MdOutlineSystemUpdate } from "react-icons/md";
import { Link } from "react-router-dom";


const MyAddedFoodItem = () => {

    const { user } = useContext(AuthContext)

    const [items, setItems] = useState([])



    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/myFoods?email=${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setItems(data)
                })
        }
    }, [user?.email])



    return (
        <div style={{ margin: "0 auto", width: "80%", textAlign: "center" }}>
            <table className="table-auto " style={{ margin: "20px", borderSpacing: "0 15px" }}>
                <thead>
                    <tr>
                        <th style={{ padding: "50px", textAlign: "left" }}>Action</th>
                        <th style={{ padding: "50px", textAlign: "left" }}>Image</th>
                        <th style={{ padding: "50px", textAlign: "left" }}>Food Name</th>
                        <th style={{ padding: "50px", textAlign: "left" }}>Price</th>
                        <th style={{ padding: "50px", textAlign: "left" }}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item._id} style={{ margin: "15px 0" }}>
                            <td style={{ padding: "10px", margin: "0", textAlign: "left" }}>
                                <button className="btn btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </td>
                            <td style={{ padding: "10px", margin: "0", textAlign: "left" }}>
                                <div className="avatar">
                                    <div className="w-24 h-24">
                                        {item?.foodImg && <img src={item.foodImg} alt="Avatar Tailwind CSS Component" style={{ width: "100%", height: "auto" }} />}
                                    </div>
                                </div>
                            </td>
                            <td style={{ padding: "10px", margin: "0", textAlign: "left" }}>{item.foodName}</td>
                            <td style={{ padding: "10px", margin: "0", textAlign: "left" }}>${item.price}</td>
                            <td style={{ padding: "10px", margin: "0", textAlign: "left" }}>
                                <Link to={`/update/${item._id}`}>
                                    <button className="btn btn-ghost btn-xs  flex justify-center text-2xl items-center" ><MdOutlineSystemUpdate size={28}></MdOutlineSystemUpdate> Update</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyAddedFoodItem;