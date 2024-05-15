import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../index.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const TopSellingFood = () => {

    const [topSelling, setTopSelling] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/purchase')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setTopSelling(data)
            })
    }, [])


    const groupedItems = topSelling.reduce((acc, item, index) => {
        const groupIndex = Math.floor(index / 3);
        acc[groupIndex] = [...(acc[groupIndex] || []), item];
        return acc;
    }, []);




    return (
        <div>
            <div className="mb-5">
                <h4 className="text-xl font-medium text-green-800">
                    Crispy, Every Bite Taste
                </h4>
                <h1 className="text-4xl mt-2 font-extrabold">
                    Top Selling Food Of Our Restaurant
                </h1>
            </div>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                className="mySwiper"
                modules={[Autoplay, Pagination, Navigation]}
            >
                {groupedItems.map((group, index) => (
                    <SwiperSlide key={index}>
                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                            {group.map(sell => (
                                <div key={sell._id} className="max-w-xs rounded-md shadow-md dark:text-gray-800 p-4">
                                    <img src={sell.foodImg} alt="" className="object-cover object-center w-full rounded-t-md h-72" />
                                    <div className="flex flex-col justify-between p-6 space-y-8">
                                        <div className="space-y-2">
                                            <h2 className="text-xl text-center font-medium">{sell.price}$</h2>
                                            <h2 className="text-2xl font-semibold tracking-wide">{sell.foodName}</h2>
                                            <h2 className="text-xl"><span className="text-2xl">Category </span>:{sell.foodCategory}</h2>
                                        </div>
                                    </div>
                                    <Link to={`/singleFoodPage/${sell._id}`}>
                                        <button className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">
                                            Details
                                        </button>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Link to='/allFood'>

                <div className="mt-5 mb-5 text-center">
                    <button className="btn btn-warning">See All</button>
                </div>
            </Link>
        </div>
    );
};

export default TopSellingFood;