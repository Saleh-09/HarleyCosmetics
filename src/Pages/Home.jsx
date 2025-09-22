import Banner from "@/components/Banner";
import FAQs from "@/components/FAQs";
import Features from "@/components/Feature";
import Footer from "@/components/Footer";
import HeroHeader from "@/components/HeroHeader";
import Testimonial from "@/components/Testimonial";
import Transformations from "@/components/Tranformations";
import Treatments from "@/components/Treatements";
import React from "react";

const Home = () => {
    return(
        <div className="w-screen min-h-screen overflow-x-hidden">
        <HeroHeader 
            useVideo={true}
            showOverlay={false}
            showContent={false}
            height="h-screen"
        />
        <Features/>
        <Transformations/>
        <Treatments/>
        <Testimonial/>
        <FAQs limit={5} />
         <div className="max-w-7xl mx-auto px-6"> 
            <Banner/>
        </div>
        <Footer/>
        </div>
    )
}
export default Home