import Banner from "@/components/Banner";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import HeroHeader from "@/components/HeroHeader";
import Transformations from "@/components/Tranformations";
import React from "react";
import FemaleTransplantImage from "../assets/TransplantImages/FemaleTransplantImage.png";
import Step1 from "../assets/Step1.svg"
import Step2 from "../assets/Step2.svg"
import Step3 from "../assets/Step3.svg"
import Step4 from "../assets/Step4.svg"
import { useEffect } from "react";
import Steps from "@/components/Steps";

const FemaleHairTransplant = () => {
    return (
        <div className="w-screen min-h-screen overflow-x-hidden bg-white"> 
            <HeroHeader
            title="Personalized Hair Transplant Solutions for Lasting, Natural Results"
            badge="Female Hair Transplant"
            height="h-[365px]"
            />
            {/* Why Choose Section */}
            <section className="py-16">
              <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
                {/* Left Image */}
                <div className="flex-shrink-0">
                  <img
                      src={FemaleTransplantImage}
                      alt="FemaleTransplantImage"
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
export default FemaleHairTransplant