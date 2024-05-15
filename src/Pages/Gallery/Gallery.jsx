
import { useEffect, useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";


const Gallery = () => {

    const [images, setImages] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/addFood')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setImages(data)
            })
    }, [])


    return (
        <div className="mt-5">
            <div className="relative">
                <img className="rounded-lg" src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/breadcrumb-1.jpg" alt="" />

                <div className="absolute transform -translate-x-1/2  -translate-y-1/2  top-1/2 left-1/2">
                    <p className=" text-5xl font-extrabold text-white ">Gallery</p>
                    <p className=" text-xl font-extrabold text-yellow-400 ml-4 flex items-center">Home<IoIosArrowDroprightCircle></IoIosArrowDroprightCircle>Gallery</p>
                </div>
            </div>

            <div className="grid grid-cols-3 mt-5">
            {images.map(image => (
                    <div key={image._id} className="relative">
                        <img src={image.foodImg} alt="" className="rounded-lg" />
                        <div className="overlay absolute inset-0 bg-black bg-opacity-50 w-full h-full p-2 text-white opacity-0 transition-opacity duration-300 hover:opacity-100 flex justify-center items-center flex-col">
                            <p className="text-lg font-bold">{image.userName}</p>
                            <p className="text-sm">{image.foodOrigin}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;