import Banner from "@/components/Banner";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import HeroHeader from "@/components/HeroHeader";
import Transformations from "@/components/Tranformations";
import React from "react";
import EyebrowImage from "../assets/TransplantImages/EyebrowTransplant.svg";
import Steps from "@/components/Steps";

const EyeBrowTransplant = () => {
    return(
        <div className="w-screen min-h-screen overflow-x-hidden bg-white"> 
            <HeroHeader
            title="Natural Eyebrow Transplants for Perfectly Shaped Eyebrows"
            badge="Eyebrow Transplant"
            height="h-[365px]"
            />
            {/* Why Choose Section */}
            <section className="py-16">
                  <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
                    
                    {/* Left Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={EyebrowImage}
                        alt="EyebrowImage"
                        className="w-[350px] h-[261px] md:w-[648px] md:h-[491px] object-cover rounded-2xl shadow-lg"
                      />
                    </div>
            
                    {/* Right Content */}
                    <div className="flex-1 text-left">
                      <span className="uppercase text-sm font-semibold tracking-widest text-[#3C2031]">
                        Traetment
                      </span>
                      <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-900 leading-tight">
                        Eyebrow Transplant Treatment
                      </h2>
                      <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                        Eyebrows play a crucial role in framing the face and enhancing your overall appearance. Our Eyebrow Transplant treatment is designed to restore sparse or over-plucked brows with natural, permanent results. By delicately implanting individual hairs to mimic the natural growth pattern, we ensure beautifully shaped eyebrows that suit your facial features. This precise, meticulous procedure allows you to achieve fuller brows that look authentic and require no makeup to fill in.
                      </p>
                    </div>
                  </div>
            </section>
            <Steps/>          
            <Transformations/>
            <FAQs/> 
            <div className="max-w-7xl mx-auto px-6"> 
              <Banner/>
            </div>
            <Footer/>
        </div>
    )
}
export default EyeBrowTransplant