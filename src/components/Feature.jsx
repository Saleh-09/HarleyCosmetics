import React from "react";
import Surgeon from "../assets/surgeon.svg"
import People from "../assets/people.svg"
import Gurantee from "../assets/Gurantee.png"
import DentalChair from "../assets/dental-chair.svg"

const Features =({ number, title, description }) => {
    return(
        <div className="max-w-7xl mx-auto px-4 mb-15">
          {/* Features Badge */}
          <div className="flex justify-center mb-8">
            <span className="bg-[#3C2031] text-[#FCD9A1]  px-6 py-4 rounded-full text-sm font-medium">Features</span>
          </div>

          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#141219] mb-4">Why Choose Elite Harley Cosmetics</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Watch videos showcasing the remarkable results achieved by our skilled surgeons.
            </p>
          </div>
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-10">
            
            <div className="bg-white w-[314px] max-w-full mx-auto rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="w-23 h-23 bg-gray-100 rounded-full flex items-center justify-center">
                    <img
                        src={Surgeon}
                        alt="Logo"
                        className="h-14 w-auto" 
                   />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Experienced Surgeons</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                15+ years in hair restoration with proven expertise
              </p>
            </div>
          </div>
        </div>
        
    )
}
export default Features