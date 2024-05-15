

const Footer = () => {
    return (
        <footer className="footer p-10 bg-gray-900 text-white mt-5">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <img src="https://modinatheme.com/foodking/wp-content/uploads/2024/05/foodking-logo.svg" alt="FoodKing Logo" className="w-32" />
                    <p className="mt-4">Delicious meals served with love. Taste the difference.</p>
                </div>
                <div>
                    <h6 className="font-bold mb-4">Explore</h6>
                    <ul>
                        <li><a href="#" className="hover:text-gray-400">Menu</a></li>
                        <li><a href="#" className="hover:text-gray-400">Locations</a></li>
                        <li><a href="#" className="hover:text-gray-400">Events</a></li>
                        <li><a href="#" className="hover:text-gray-400">Offers</a></li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-bold mb-4">About Us</h6>
                    <ul>
                        <li><a href="#" className="hover:text-gray-400">Our Story</a></li>
                        <li><a href="#" className="hover:text-gray-400">Team</a></li>
                        <li><a href="#" className="hover:text-gray-400">Careers</a></li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-bold mb-4">Connect</h6>
                    <ul>
                        <li>Email: info@foodking.com</li>
                        <li>Phone: +123 456 7890</li>
                        <li>
                            <a href="#" className="hover:text-gray-400 inline-block mr-2">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="hover:text-gray-400 inline-block mr-2">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="hover:text-gray-400 inline-block">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-8 text-center text-sm">
                <p>&copy; 2024 FoodKing. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;