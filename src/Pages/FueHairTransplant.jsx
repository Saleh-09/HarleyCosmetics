import HeroHeader from "@/components/HeroHeader";
import React from "react";
import FueImage from "../assets/FueImage.svg";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Transformations from "@/components/Tranformations";
import FAQs from "@/components/FAQs";
import Steps from "@/components/Steps";
const FueHairTransplant = () => {
    return(
        <div className="w-screen min-h-screen overflow-x-hidden bg-white"> 
            <HeroHeader
            title="Personalized Hair Transplant Solutions for Lasting, Natural Results"
            badge="Fue Hair Transplant"
            height="h-[365px]"
            />
            {/* Why Choose Section */}
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
                          FUE Hair Transplant
                        </h2>
                        <p className="text-[19px] text-gray-600 leading-relaxed max-w-xl">
                          Our FUE Hair Transplant is a highly advanced and minimally invasive procedure that delivers permanent, natural-looking hair restoration. Using precision techniques, individual hair follicles are carefully extracted and implanted to create a full, even, and realistic hairline without leaving noticeable scars. This modern method ensures faster healing, minimal discomfort, and long-lasting results that blend seamlessly with your existing hair.
                        </p>
                      </div>
                  </div>
            </section>
            <Steps/>
            <Transformations/>
            <div className="max-w-7xl mx-auto px-6"> 
              <FAQs/>            
              <Banner/>
            </div>
            <Footer/>
        </div>
    )
}
export default FueHairTransplant