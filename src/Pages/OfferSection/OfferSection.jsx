import 'animate.css';

const OfferSection = () => {
    return (
        <div className="flex mb-5 gap-5">
        <div className="w-2/5 flex justify-start bg-no-repeat bg-[url('https://modinatheme.com/foodking/wp-content/uploads/2024/02/offer-bg-1.png')]">
            <img
                className="animate__animated animate__fadeIn animate__delay-2s animate__slower animate__infinite"
                src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/50percent-off.png"
                alt=""
            />
            <img
                className=""
                src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/main-food.png"
                alt=""
            />
        </div>
        <div className="w-3/5 flex bg-no-repeat bg-[url('https://modinatheme.com/foodking/wp-content/uploads/2024/02/pizza-bg.png')]">
            <img
                className="pl-3 animate__animated animate__fadeIn animate__delay-4s animate__slower animate__infinite"
                src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/pizza-text.png"
                alt=""
            />
            <img
                className=''
                src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/pizza-2.png"
                alt=""
            />
        </div>
    </div>
    );
};

export default OfferSection;