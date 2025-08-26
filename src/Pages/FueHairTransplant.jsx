import HeroHeader from "@/components/HeroHeader";
import React from "react";
import FueImage from "../assets/FueImage.svg";
import Transformations from "@/components/Tranformations";
import FAQsPage from "./FAQsPage";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
const FueHairTransplant = () => {
    return(
        <div>
            <HeroHeader
            title="Insights, Tips, and the Latest in Hair Restoration Care"
            badge="Blogs"
            height="h-[365px]"
            />
            <WhyChooseUs
                image={FueImage}
                alt="FUE Hair Transplant"
                subtitle="Treatment"
                title="Fue Hair Transplant Treatment"
                description="FUE (Follicular Unit Extraction) offers a modern solution for hair restoration, 
                delivering natural-looking results with minimal downtime and no visible scars."
            />
            <Transformations/>
            <FAQsPage/>
            <Banner/>
            <Footer/>
        </div>
    )
}
export default FueHairTransplant