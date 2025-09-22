import Banner from "@/components/Banner";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import HeroHeader from "@/components/HeroHeader";
import React from "react";

const FAQsPage = () => {
    return(
        <div>
            <HeroHeader
            title="Trusted Experts Dedicated to Natural Hair Transformation"
            badge="FAQs"
            height="h-[365px]"
            />
            <div className="max-w-7xl mx-auto px-3"> 
              <FAQs/>            
              <Banner/>
            </div>
            <Footer/>
        </div>
    )
}
export default FAQsPage