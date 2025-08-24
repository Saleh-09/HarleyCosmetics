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
         title={
            <>
             Hair Transplants <br /> To Restore Your Natural <br /> Look
            </>
            }
            subtitle="Our advanced hair transplant techniques deliver natural, lasting results restoring your confidence with fuller, healthier hair."
        />
        <Features/>
        <Transformations/>
        <Treatments/>
        <Testimonial/>
        <FAQs limit={5} />
        <Banner/>
        <Footer/>
        </div>
    )
}
export default Home