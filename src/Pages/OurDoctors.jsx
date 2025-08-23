import HeroHeader from "@/components/HeroHeader";
import React from "react";
import Doctor1 from "../assets/Doctor1.png"; 
import Doctor2 from "../assets/Doctor2.png"; 
import Doctor3 from "../assets/doctor3.png"; 

const OurDoctors = () => {
    return(
        <div className="w-screen min-h-screen overflow-x-hidden">
            <HeroHeader
            title="Meet Our Specialists Behind Every Successful Transformation"
            badge="Our Doctors"
            height="h-[365px]"
            />
            <div className="max-w-7xl mx-auto px-4 mb-15">
            <div className="flex justify-center mb-8">
                <span className="bg-[#3C2031] text-[#FCD9A1] px-6 py-4 rounded-full text-base font-medium">Surgeons</span>
            </div>
            <div className="text-center mb-12">
                <h2 className="text-[#141219] font-bold text-4xl md:text-5xl mb-4">
                    Our Experienced Hair Surgeons
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Get to know the certified surgeons and medical experts dedicated to delivering the best possible results.
                </p>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* Doctor Card 1 */}
                <div>
                    <img className="mb-3"
                      src={Doctor1}
                      alt="firstTranformation"
                    />
                    <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">Dr. Ahmed Khan</h2>
                    <h3 className="text-xl font-medium text-gray-600 mb-2 text-center">Hair Transplant Surgeon | Dermatologist</h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                       15+ Years in Hair Restoration Surgery, MBBS, FCPS, Fellowship in Hair Restoration, ISHRS Certified
                    </p>
                </div>
                 {/* Doctor Card 1 */}
                <div>
                    <img className="mb-3"
                      src={Doctor2}
                      alt="firstTranformation"
                    />
                    <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">Dr. Ahmed Khan</h2>
                    <h3 className="text-xl font-medium text-gray-600 mb-2 text-center">Hair Transplant Surgeon | Dermatologist</h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                       15+ Years in Hair Restoration Surgery, MBBS, FCPS, Fellowship in Hair Restoration, ISHRS Certified
                    </p>
                </div>
                 {/* Doctor Card 1 */}
                <div>
                    <img className="mb-3"
                      src={Doctor3}
                      alt="firstTranformation"
                    />
                    <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">Dr. Ahmed Khan</h2>
                    <h3 className="text-xl font-medium text-gray-600 mb-2 text-center">Hair Transplant Surgeon | Dermatologist</h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                       15+ Years in Hair Restoration Surgery, MBBS, FCPS, Fellowship in Hair Restoration, ISHRS Certified
                    </p>
                </div>
            </div>
        </div>
        </div>
    )
}
export default OurDoctors