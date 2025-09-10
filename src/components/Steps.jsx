import React from "react";
import Step1 from "../assets/Step1.svg";
import Step2 from "../assets/Step2.svg";
import Step3 from "../assets/Step3.svg";
import Step4 from "../assets/Step4.svg";

const Steps = ()=> {
    return(
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
              {/* Steps Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-10" >
                {/* Step Card 1 */}
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
                {/* Step Card 2 */}
                <div className="bg-white w-[314px] max-w-full mx-auto rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-6">
                    <div className="w-23 h-23 bg-gray-100 rounded-full flex items-center justify-center">
                      <img
                        src={Step2}
                        alt="step2"
                        className="h-14 w-auto" 
                      />
                    </div>
                    
                  </div>
                  <h3 className="text-[20px] font-semibold text-gray-900 mb-4 text-center">Consultation</h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                       Personalized hair analysis and treatment planning.
                  </p>
                </div>
                {/* Step Card 3 */}
                <div className="bg-white w-[314px] max-w-full mx-auto rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-6">
                    <div className="w-23 h-23 bg-gray-100 rounded-full flex items-center justify-center">
                      <img
                        src={Step3}
                        alt="step3"
                        className="h-14 w-auto" 
                      />
                    </div>
                    
                  </div>
                  <h3 className="text-[20px] font-semibold text-gray-900 mb-4 text-center">Consultation</h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                       Personalized hair analysis and treatment planning.
                  </p>
                </div>
                {/* Step Card 4 */}
                <div className="bg-white w-[314px] max-w-full mx-auto rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-6">
                    <div className="w-23 h-23 bg-gray-100 rounded-full flex items-center justify-center">
                      <img
                        src={Step4}
                        alt="step4"
                        className="h-14 w-auto" 
                      />
                    </div>
                    
                  </div>
                  <h3 className="text-[20px] font-semibold text-gray-900 mb-4 text-center">Consultation</h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                       Personalized hair analysis and treatment planning.
                  </p>
                </div>
              </div>
        </div>
    )
}
export default Steps;