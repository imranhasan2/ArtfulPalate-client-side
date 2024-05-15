
import { Helmet } from "react-helmet-async";
import AboutOurFood from "../AboutOurFood/AboutOurFood";
import Banner from "../Banner/Banner";
import OfferSection from "../OfferSection/OfferSection";
import TopSellingFood from "../TopSellingFood/TopSellingFood";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home || Food King</title>
                <meta name="description" content="Description of my page" />
                {/* Other meta tags */}
            </Helmet>

            <Banner></Banner>
            <TopSellingFood></TopSellingFood>
            <OfferSection></OfferSection>
            <AboutOurFood></AboutOurFood>
        </div>
    );
};

export default Home;