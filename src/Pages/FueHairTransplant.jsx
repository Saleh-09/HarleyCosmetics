import HeroHeader from "@/components/HeroHeader";
import React from "react";
import FueImage from "../assets/FueImage.svg";
import Transformations from "@/components/Tranformations";
import FAQsPage from "./FAQsPage";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhyChooseUs";
const FueHairTransplant = () => {
    return(
        <div>
            <HeroHeader
            title="Personalized Hair Transplant Solutions for Lasting, Natural Results"
            badge="Fue Hair Transplant"
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