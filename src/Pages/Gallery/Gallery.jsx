import { useContext, useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Gallery = () => {
    const { user } = useContext(AuthContext);
    const [modalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleOpenModal = () => {
        if (user) {
            setModalOpen(true);
        } else {
            navigate('/login');
        }
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };


    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const feedback = form.feedback.value;
        const url = form.photoUrl.value;
        const photo ={feedback,url}
        console.log(feedback, url)

        fetch('http://localhost:5000/photo',{
            method : "POST",
            headers:{
                "content-type" : 'application/json'
            },
            body: JSON.stringify(photo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

    }

    return (
        <div className="mt-5">
            <Helmet>
                <title>Gallery || Food King</title>
                <meta name="description" content="Description of my page" />
                {/* Other meta tags */}
            </Helmet>
            <div className="relative">
                <img className="rounded-lg" src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/breadcrumb-1.jpg" alt="" />
                <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <p className="text-5xl font-extrabold text-white">Gallery</p>
                    <p className="text-xl font-extrabold text-yellow-400 ml-4 flex items-center">Home<IoIosArrowDroprightCircle /></p>
                </div>
            </div>
            <div className="text-center">
                <h3 className="text-green-500 font-Poppins text-2xl mt-4">Add Image And Feedback Please</h3>
            </div>
            <button className="btn btn-warning" onClick={handleOpenModal}>Add</button>
            {user && modalOpen && (
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle" open>
                    <div className="modal-box">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="username" className="block font-semibold text-gray-700">Your Name:</label>
                                <input type="text" name="username" defaultValue={user?.displayName} id="username" className="border border-gray-300 rounded-md p-2" readOnly />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="feedback" className="block font-semibold text-gray-700">Feedback:</label>
                                <input type="text" name="feedback" placeholder="Feedback" id="feedback" className="border border-gray-300 rounded-md p-2" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="photoUrl" className="block font-semibold text-gray-700">Photo URL:</label>
                                <input type="url" placeholder="Photo URL" name="photoUrl" id="photoUrl" className="border border-gray-300 rounded-md p-2" />
                            </div>
                            <div>
                                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Add</button>
                            </div>

                        </form>

                        <div className="modal-action">
                            <button className="btn" onClick={handleCloseModal}>Close</button>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default Gallery;
