
import { useContext, useState } from "react";

import { Link, NavLink, useNavigate, } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)

    const [open, setOpen] = useState(false)

    const navigate = useNavigate()

   
    const handleMenuClick = (menu) => {
        switch (menu) {
            case "My added food items":
                navigate("/my-added-food-items");
                break;
            case "Add a food item":
                navigate("/addAFoodItem");
                break;
            case "My ordered food items":
                navigate("/myOrderedFood");
                break;
            default:
                break;
        }
        setOpen(false);
    };



    const Menus = ["My added food items",
        "Add a food item",
        "  My ordered food items"]


    const navbar = <>
        <li><NavLink to='/' style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                backgroundColor: isActive ? "green" : "",
            };
        }}>Home</NavLink></li>
        <li><NavLink to='allFood'
            style={({ isActive }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    backgroundColor: isActive ? "green" : "",
                };
            }}>All Foods</NavLink></li>
        <li><NavLink to='gallery'
            style={({ isActive }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    backgroundColor: isActive ? "green" : "",
                };
            }}>Gallery</NavLink></li>

    </>


    return (
        <div className="">
            <hr className="border-solid border-1 mt-5" />
            <div className="navbar bg-base-100  mt-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navbar}
                        </ul>
                    </div>
                    <img src="https://modinatheme.com/foodking/wp-content/uploads/2024/05/foodking-logo.svg" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navbar}
                    </ul>
                </div>
                <div className="navbar-end relative">
                    {
                        user ? <div className="relative flex gap-3">

                            <img
                            
                            onClick={() => setOpen(!open)}
                            src={user?.photoURL || "https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg"} alt="User" className="w-16 h-16 rounded-full cursor-pointer" />


                            {
                                open && (
                                    <div className="absolute  bg-white p-4 shadow-lg -left-14 top-16 z-20">
                                        <ul>
                                            {
                                                Menus.map((menu) => (
                                                    <li className="p-2 hover:bg-blue-500 rounded cursor-pointer text-lg text-red-700" key={menu}
                                                    
                                                    onClick={() => handleMenuClick(menu)}
                                                    >{menu}</li>
                                                ))
                                            }
                                        </ul>

                                    </div>
                                )
                            }

                            <span className="absolute top-0 left-full ml-2 bg-white p-1 rounded-md opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                                {user.displayName}
                            </span>


                            <button className="btn bg-warning px-3 py-1 rounded-xl" onClick={logOut}>
                                LogOut
                            </button>
                        </div> :
                            <Link to={'/login'}>
                                <button className="btn bg-warning ">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;