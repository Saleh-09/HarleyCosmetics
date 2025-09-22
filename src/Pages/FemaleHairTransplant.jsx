import Banner from "@/components/Banner";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import HeroHeader from "@/components/HeroHeader";
import Transformations from "@/components/Tranformations";
import React from "react";
import FemaleTransplantImage from "../assets/TransplantImages/FemaleTransplantImage.svg";
import Steps from "@/components/Steps";

const FemaleHairTransplant = () => {
    return (
        <div className="w-screen min-h-screen overflow-x-hidden bg-white"> 
            <HeroHeader
            title="Hair Transplant Solutions Designed for Natural Elegance"
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
                        Female Hair Transplant 
                      </h2>
                      <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                        Hair thinning and loss in women can be emotionally overwhelming, but our Female Hair Transplant treatments provide a long-lasting solution. We use advanced FUE techniques to carefully restore volume in thinning areas, whether it’s along the hairline, temples, or crown. Each procedure is tailored to suit the natural direction, density, and texture of your hair, ensuring results that are both natural and permanent. With minimal downtime and a gentle approach, our specialists create fuller, healthier looking hair that restores not just your appearance, but your self confidence.
                      </p>                       
                  </div>
              </div>
            </section>
            <Steps/>
            <Transformations/>
            <FAQs/>
            <div className="max-w-7xl mx-auto px-3"> 
            <Banner/>
            </div>
            <Footer/>
        </div>
    )
}
export default FemaleHairTransplant