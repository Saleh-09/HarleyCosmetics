import Banner from "@/components/Banner";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import HeroHeader from "@/components/HeroHeader";
import Steps from "@/components/Steps";
import Transformations from "@/components/Tranformations";
import React from "react";
import FemaleAfroHairTransplantImage from "../assets/TransplantImages/FemaleAfro.svg";

const FemaleAfroHairTransplant = () => {
    return(
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
                      src={FemaleAfroHairTransplantImage}
                      alt="FemaleAfroHairTransplantImage"
                      className="w-[350px] h-[261px] md:w-[648px] md:h-[491px] object-cover rounded-2xl shadow-lg"
                 />
                </div>
                 {/* Right Content */}
                  <div className="flex-1 text-left">
                     <span className="uppercase text-sm font-semibold tracking-widest text-[#3C2031]">
                        Traetment
                      </span>
                      <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-900 leading-tight">
                        Female Afro Hair Transplant
                      </h2>
                      <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                        For women with afro-textured hair, hair loss can be especially challenging, affecting both appearance and self-confidence. Our Female Afro Hair Transplant procedures are designed with sensitivity and precision to restore natural fullness and volume while maintaining the unique beauty of afro-textured hair. Using advanced transplantation techniques, we carefully place each follicle to recreate natural growth patterns, ensuring results that are soft, dense, and seamlessly integrated.
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
export default FemaleAfroHairTransplant