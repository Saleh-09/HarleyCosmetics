import Banner from "@/components/Banner";
import FAQs from "@/components/FAQs";
import Features from "@/components/Feature";
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
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna."
        />
        <Features/>
        <Transformations/>
        <Treatments/>
        <Testimonial/>
        <FAQs limit={5} />
        <Banner/>
        </div>
    )
}
export default Home