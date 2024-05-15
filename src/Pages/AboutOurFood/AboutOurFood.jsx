import { GiHamburger } from "react-icons/gi";
import { FaUserFriends } from "react-icons/fa";

const AboutOurFood = () => {
    return (
        <div className="flex ">
            <div className="w-1/2 pl-10 relative">
                <img src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/burger-4.png" alt="" />
                <h2 className="bg-yellow-500  absolute right-0 bottom-1/4 rounded-md -rotate-45 px-4 py-6 w-[200px] text-center text-white text-2xl font-semibold">Since/1982</h2>
            </div>
            <div className="w-1/2">

                <h2 className="text-green-600 font-medium text-left">About Our Food</h2>
                <h1 className="font-black text-4xl mb-8"> Where Quality Meet <br /> Excellent <span className="text-green-600">Service</span>.</h1>

                <p className="text-xl text-black font-normal">Its the perfect dining experience where every dish is crafted with fresh, high-quality Experience quick and efficient service that ensures your food is servead fresh Its the dining experience where every dish is crafted with fresh, high-quality ingredients</p>
                <div className="flex mt-8 gap-5">
                    <div >
                        <h3 className="text-2xl font-semibold flex gap-5 "><GiHamburger className="text-yellow-500"></GiHamburger> Super Quality Food</h3>
                        <h5 className="mt-3 space-y-2 font-normal ">A team of dreamers and doers <br /> building unique interactive <br /> music and art</h5>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold flex gap-5"><FaUserFriends className="text-yellow-500"></FaUserFriends>Well Reputation</h3>
                        <h5 className="mt-3 space-y-2 font-normal">A team of dreamers and doers <br /> building unique interactive <br /> music and art</h5>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutOurFood;