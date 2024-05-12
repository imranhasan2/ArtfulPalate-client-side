

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

import '../../index.css';

// import required modules
import { EffectCreative } from 'swiper/modules';
const Banner = () => {
    return (
        <div className='mt-5 mb-8 '>
            <Swiper
                grabCursor={true}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }}
                modules={[EffectCreative]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="flex justify-center items-center bg-[url('https://modinatheme.com/foodking/wp-content/uploads/2024/02/hero-bg.jpg')] rounded-3xl h-[700px] bg-no-repeat">
                        <div className="w-1/2 text-center">
                            <p className="text-yellow-500">Crispy,EveryBite,Taste</p>
                            <h1 className="text-7xl font-extrabold text-white">DELICIOUS <br /> FRIED <br /> CHICKEN</h1>
                        </div>
                        <div className="flex justify-center items-center">
                            <div>
                                <img src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/chiken.png" alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex justify-center items-center bg-[url('https://modinatheme.com/foodking/wp-content/uploads/2024/02/hero-bg.jpg')] rounded-3xl h-[700px] bg-no-repeat">
                        <div className="w-1/2 text-center">
                            <p className="text-yellow-500">Crispy,EveryBite,Taste</p>
                            <h1 className="text-7xl font-extrabold text-white">FAVOROTE <br /> FRIED <br /> CHICKEN</h1>
                        </div>
                        <div className="flex justify-center items-center">
                            <div>
                                <img src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/chiken.png" alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex justify-center items-center bg-[url('https://modinatheme.com/foodking/wp-content/uploads/2024/02/hero-bg.jpg')] rounded-3xl h-[700px] bg-no-repeat">
                        <div className="w-1/2 text-center">
                            <p className="text-yellow-500">Crispy,EveryBite,Taste</p>
                            <h1 className="text-7xl font-extrabold text-white">AWESOME <br /> FRIED <br /> CHICKEN</h1>
                        </div>
                        <div className="flex justify-center items-center">
                            <div>
                                <img src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/chiken.png" alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>




            </Swiper>

        </div>
    );
};

export default Banner;