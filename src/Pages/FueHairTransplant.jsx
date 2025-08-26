import HeroHeader from "@/components/HeroHeader";
import React from "react";
import FueImage from "../assets/FueImage.svg";
import FAQsPage from "./FAQsPage";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Transformations from "@/components/Tranformations";
import FAQs from "@/components/FAQs";
const FueHairTransplant = () => {
    return(
        <div>
            <HeroHeader
            title="Personalized Hair Transplant Solutions for Lasting, Natural Results"
            badge="Fue Hair Transplant"
            height="h-[365px]"
            />
            <section className="py-16">
                  <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
                    
                    {/* Left Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={FueImage}
                        alt="FueImage"
                        className="w-[350px] h-[261px] md:w-[648px] md:h-[491px] object-cover rounded-2xl shadow-lg"
                      />
                    </div>
            
                    {/* Right Content */}
                    <div className="flex-1 text-left">
                      <span className="uppercase text-sm font-semibold tracking-widest text-[#3C2031]">
                        Traetment
                      </span>
                      <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-900 leading-tight">
                        Hair Transplant Treatment
                      </h2>
                      <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                        Our advanced hair transplant techniques are designed to deliver natural looking, permanent results. Whether you’re struggling with thinning hair, patchy beard growth, or sparse eyebrows, our specialists restore your confidence with proven methods and minimal downtime.
                      </p>
                    </div>
                  </div>
            </section>
            <Transformations/>
            <FAQs/>
            <Banner/>
            <Footer/>
        </div>
    )
}
export default FueHairTransplant