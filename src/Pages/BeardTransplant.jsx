import Banner from "@/components/Banner";
import FAQs from "@/components/FAQs";
import HeroHeader from "@/components/HeroHeader";
import Transformations from "@/components/Tranformations";
import React from "react";
import BeardImage from "../assets/TransplantImages/BeardTransplantImage.png";
import Step1 from "../assets/Step1.svg"
import Step2 from "../assets/Step2.svg"
import Step3 from "../assets/Step3.svg"
import Step4 from "../assets/Step4.svg"
import Footer from "@/components/Footer";

const BeardTransplant = () => {
    return(
         <div className="w-screen min-h-screen overflow-x-hidden bg-white"> 
            <HeroHeader
            title="Personalized Hair Transplant Solutions for Lasting, Natural Results"
            badge="Beard Transplant"
            height="h-[365px]"
            />
            {/* Why Choose Section */}
            <section className="py-16">
                  <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
                    
                    {/* Left Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={BeardImage}
                        alt="BeardImage"
                        className="w-[350px] h-[261px] md:w-[648px] md:h-[491px] object-cover rounded-2xl shadow-lg"
                      />
                    </div>
            
                    {/* Right Content */}
                    <div className="flex-1 text-left">
                      <span className="uppercase text-sm font-semibold tracking-widest text-[#3C2031]">
                        Traetment
                      </span>
                      <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-900 leading-tight">
                        Beard Transplant Treatment
                      </h2>
                      <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                        Our advanced hair transplant techniques are designed to deliver natural looking, permanent results. Whether you’re struggling with thinning hair, patchy beard growth, or sparse eyebrows, our specialists restore your confidence with proven methods and minimal downtime.
                      </p>
                    </div>
                  </div>
            </section>
            {/* How It Works Section */}
            <div className="max-w-7xl mx-auto px-4 mb-15">
                {/* Steps Badge */}
                <div className="flex justify-center mb-4">
                    <span className="text-[#3C2031] text-[25px] font-semibold">Steps</span>
                </div>

                {/* Section Header */}
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-[#141219] mb-4">How Our Treatment Works</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    From your first consultation to your final results, our process is designed to be safe, effective, and tailored to your unique needs ensuring natural growth 
                  </p>
                </div>
                {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-10">
                {/* Feature Card 1 */}
                <div className="bg-white w-[314px] max-w-full mx-auto rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-6">
                    <div className="w-23 h-23 bg-gray-100 rounded-full flex items-center justify-center">
                        <img
                            src={Step1}
                            alt="step1"
                            className="h-14 w-auto" 
                      />
                    </div>
                  </div>
                  <h3 className="text-[20px] font-semibold text-gray-900 mb-4 text-center">Consultation</h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    Personalized hair analysis and treatment planning.
                  </p>
                </div>
                {/* Feature Card 2 */}
                <div className="bg-white w-[314px] max-w-full mx-auto rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-6">
                    <div className="w-23 h-23 bg-gray-100 rounded-full flex items-center justify-center">
                        <img
                            src={Step2}
                            alt="step1"
                            className="h-14 w-auto" 
                      />
                    </div>
                  </div>
                  <h3 className="text-[20px] font-semibold text-gray-900 mb-4 text-center">Donor Hair Extraction</h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    Grafts carefully collected from safe donor areas.
                  </p>
                </div>
                {/* Feature Card 3 */}
                <div className="bg-white w-[314px] max-w-full mx-auto rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-6">
                    <div className="w-23 h-23 bg-gray-100 rounded-full flex items-center justify-center">
                        <img
                            src={Step3}
                            alt="step1"
                            className="h-14 w-auto" 
                      />
                    </div>
                  </div>
                  <h3 className="text-[20px] font-semibold text-gray-900 mb-4 text-center">Graft Implantation</h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    Placement using FUE/DHI techniques for natural growth.
                  </p>
                </div>
                {/* Feature Card 4 */}
                <div className="bg-white w-[314px] max-w-full mx-auto rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-6">
                    <div className="w-23 h-23 bg-gray-100 rounded-full flex items-center justify-center">
                        <img
                            src={Step4}
                            alt="step1"
                            className="h-14 w-auto" 
                      />
                    </div>
                  </div>
                  <h3 className="text-[20px] font-semibold text-gray-900 mb-4 text-center">Recovery & Growth</h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    Initial healing in 1–2 weeks, full results in 9–12 months.
                  </p>
                </div>
              </div>          
            </div>        
            <Transformations/>
            <div className="max-w-7xl mx-auto px-6"> 
              <FAQs/>        
              <Banner/>
            </div>
            <Footer/>
        </div>
    )
}
export default BeardTransplant;