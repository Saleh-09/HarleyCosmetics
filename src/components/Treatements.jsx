import React from "react";
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const Treatments = () => {
    return(
        <div className="max-w-7xl mx-auto px-4 mb-15 flex flex-col items-center">
            {/* Treatments Badge */}
            <div className="flex justify-center mb-4">
                <span className="text-[#3C2031] text-[25px] font-semibold">Treatments</span>
            </div>
            {/* Section Header */}
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-[#141219] mb-4">Comprehensive Solutions for Every Need</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover our range of advanced treatments designed to deliver natural, 
                lasting results for every individual.
                </p>
            </div>
            {/* Treatments Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Treatment Card 1 */}
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-between text-center w-full max-w-sm mx-auto h-full">
                    <div className="flex flex-col items-center justify-center text-center space-y-[25px] flex-1 w-full px-[20px]">
                        <h3 className="font-bevietnam text-[22px] font-medium text-[#141219] leading-snug">
                        Fue Hair Transplant
                        </h3>

                        <p className="text-gray-600 leading-relaxed break-words text-[16.5px]">
                        This advanced technique ensures minimal scarring and quick recovery while delivering fuller, natural-looking hair results.
                        </p>
                    </div>
                    <Link
                        to="/male/fue-hair-transplant"
                        className="mt-[25px] w-full max-w-[250px] h-[48px] text-[15px] bg-[#3C2031] hover:bg-[#4a2e4a] text-[#FCD9A1] rounded-2xl flex items-center justify-center gap-2 transition-colors"
                    >
                        <span>Explore More</span>
                        <ArrowRight className="w-4 h-4 text-[#FCD9A1]" />
                    </Link>
                </div>
                {/* Treatment Card 2*/}
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-between text-center w-full max-w-sm mx-auto h-full">
                    <div className="flex flex-col items-center justify-center text-center space-y-[25px] flex-1 w-full px-[20px]">
                        <h3 className="font-bevietnam text-[22px] font-medium text-[#141219] leading-snug">
                        Beard Transplant
                        </h3>

                        <p className="text-gray-600 leading-relaxed break-words text-[16.5px]">
                        Enhances facial hair density and symmetry with precise graft placement for a natural beard.
                        Achieve long lasting, natural results with minimal time.
                        </p>
                    </div>
                    <Link
                        to="/male/fue-hair-transplant"
                        className="mt-[25px] w-full max-w-[250px] h-[48px] text-[15px] bg-[#3C2031] hover:bg-[#4a2e4a] text-[#FCD9A1] rounded-2xl flex items-center justify-center gap-2 transition-colors"
                    >
                        <span>Explore More</span>
                        <ArrowRight className="w-4 h-4 text-[#FCD9A1]" />
                    </Link>
                </div>
                {/* Treatment Card 3*/}
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-between text-center w-full max-w-sm mx-auto h-full">
                    <div className="flex flex-col items-center justify-center text-center space-y-[25px] flex-1 w-full px-[20px]">
                        <h3 className="font-bevietnam text-[22px] font-medium text-[#141219] leading-snug">
                        Eyebrow Transplant
                        </h3>

                        <p className="text-gray-600 leading-relaxed break-words text-[17px]">
                        This advanced technique ensures minimal scarring and quick recovery while delivering fuller, natural-looking hair results.
                        </p>
                    </div>
                    <Link
                        to="/male/fue-hair-transplant"
                        className="mt-[25px] w-full max-w-[250px] h-[48px] text-[15px] bg-[#3C2031] hover:bg-[#4a2e4a] text-[#FCD9A1] rounded-2xl flex items-center justify-center gap-2 transition-colors"
                    >
                        <span>Explore More</span>
                        <ArrowRight className="w-4 h-4 text-[#FCD9A1]" />
                    </Link>
                </div>
                {/* Treatment Card 4*/}
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-between text-center w-full max-w-sm mx-auto h-full">
                    <div className="flex flex-col items-center justify-center text-center space-y-[25px] flex-1 w-full px-[20px]">
                        <h3 className="font-bevietnam text-[22px] font-medium text-[#141219] leading-snug">
                        Afro Hair Transplant
                        </h3>

                        <p className="text-gray-600 leading-relaxed break-words text-[17px]">
                        This advanced technique ensures minimal scarring and quick recovery while delivering fuller, natural-looking hair results.
                        </p>
                    </div>
                    <Link
                        to="/male/fue-hair-transplant"
                        className="mt-[25px] w-full max-w-[250px] h-[48px] text-[15px] bg-[#3C2031] hover:bg-[#4a2e4a] text-[#FCD9A1] rounded-2xl flex items-center justify-center gap-2 transition-colors"
                    >
                        <span>Explore More</span>
                        <ArrowRight className="w-4 h-4 text-[#FCD9A1]" />
                    </Link>
                </div>
                {/* Treatment Card 5*/}
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-between text-center w-full max-w-sm mx-auto h-full">
                    <div className="flex flex-col items-center justify-center text-center space-y-[25px] flex-1 w-full px-[20px]">
                        <h3 className="font-bevietnam text-[22px] font-medium text-[#141219] leading-snug">
                        Female Hair Transplant
                        </h3>

                        <p className="text-gray-600 leading-relaxed break-words text-[17px]">
                        This advanced technique ensures minimal scarring and quick recovery while delivering fuller, natural-looking hair results.
                        </p>
                    </div>
                    <Link
                        to="/male/fue-hair-transplant"
                        className="mt-[25px] w-full max-w-[250px] h-[48px] text-[15px] bg-[#3C2031] hover:bg-[#4a2e4a] text-[#FCD9A1] rounded-2xl flex items-center justify-center gap-2 transition-colors"
                    >
                        <span>Explore More</span>
                        <ArrowRight className="w-4 h-4 text-[#FCD9A1]" />
                    </Link>
                </div>
                {/* Treatment Card 6*/}
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-between text-center w-full max-w-sm mx-auto h-full">
                    <div className="flex flex-col items-center justify-center text-center space-y-[25px] flex-1 w-full px-[20px]">
                        <h3 className="font-bevietnam text-[22px] font-medium text-[#141219] leading-snug">
                        Un-Shaven Hair Transplant
                        </h3>

                        <p className="text-gray-600 leading-relaxed break-words text-[16.5px]">
                        Procedure performed without shaving, ideal for maintaining your existing hairstyle. Provides seamless and natural results without altering your current look.
                        </p>
                    </div>
                    <Link
                        to="/male/fue-hair-transplant"
                        className="mt-[25px] w-full max-w-[250px] h-[48px] text-[15px] bg-[#3C2031] hover:bg-[#4a2e4a] text-[#FCD9A1] rounded-2xl flex items-center justify-center gap-2 transition-colors"
                    >
                        <span>Explore More</span>
                        <ArrowRight className="w-4 h-4 text-[#FCD9A1]" />
                    </Link>
                </div>                
            </div>
        </div>
    )
}
export default Treatments