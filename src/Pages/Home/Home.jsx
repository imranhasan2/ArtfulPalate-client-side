
import AboutOurFood from "../AboutOurFood/AboutOurFood";
import Banner from "../Banner/Banner";
import OfferSection from "../OfferSection/OfferSection";
import TopSellingFood from "../TopSellingFood/TopSellingFood";


const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <TopSellingFood></TopSellingFood>
            <OfferSection></OfferSection>
            <AboutOurFood></AboutOurFood>
        </div>
    );
};

export default Home;