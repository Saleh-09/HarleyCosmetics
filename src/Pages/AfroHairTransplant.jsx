import Banner from "@/components/Banner";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import HeroHeader from "@/components/HeroHeader";
import React from "react";
import MaleAfroHair from "../assets/TransplantImages/MaleAfroHair.svg";
import Transformations from "@/components/Tranformations";
import Steps from "@/components/Steps";

const AfroHairTransplant = () => {
    return(
        <div className="w-screen min-h-screen overflow-x-hidden bg-white"> 
            <HeroHeader
            title="Afro Hair Transplant for Natural Texture and Lasting Results"
            badge="Afro Hair Transplant"
            height="h-[365px]"
            />
            {/* Why Choose Section */}
            <section className="py-16">
                  <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
                    
                    {/* Left Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={MaleAfroHair}
                        alt="MaleAfroHair"
                        className="w-[350px] h-[261px] md:w-[648px] md:h-[491px] object-cover rounded-2xl shadow-lg"
                      />
                    </div>
            
                    {/* Right Content */}
                    <div className="flex-1 text-left">
                      <span className="uppercase text-sm font-semibold tracking-widest text-[#3C2031]">
                        Traetment
                      </span>
                      <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-900 leading-tight">
                        Male Afro Hair Transplant
                      </h2>
                      <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                        Afro-textured hair requires a unique approach due to its distinctive curl pattern and natural thickness. Our Male Afro Hair Transplant techniques are specifically designed to address these challenges, ensuring that the restored hair maintains its natural curl and density. We carefully extract and implant hair follicles in a way that blends seamlessly with your existing hair, creating a natural-looking and lasting result. Whether you’re experiencing thinning on the crown, a receding hairline, or patchy baldness, our specialists provide customized solutions.
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
export default AfroHairTransplant