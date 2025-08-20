import React from "react";
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react";
const Treatments = () => {
    return(
        <div className="max-w-7xl mx-auto px-4 mb-15 flex flex-col items-center">
            {/* Treatments Badge */}
            <div className="flex justify-center mb-8">
                <span className="bg-[#3C2031] text-[#FCD9A1]  px-6 py-4 rounded-full text-sm font-medium">Treatments</span>
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {/* Treatment Card 1*/}
                <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col items-center justify-center space-x-0.5 mb-6">
                        <h3 className="font-bevietnam text-[20px] font-normal text-[#141219] mb-4 text-center">Fue Hair Transplant</h3>
                        <p className="text-gray-600 text-center leading-relaxed mb-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
                        </p>
                        <Button className="w-[220px] h-[50px] text-[16px] border-none bg-[#3C2031] hover:bg-[#4a2e4a] text-[#FCD9A1] rounded-2xl flex items-center justify-center gap-2">
                            Explore More
                            <ArrowRight className="w-4 h-4 text-[#FCD9A1]" />
                        </Button>
                    </div>
                </div>
                {/* Treatment Card 2*/}
                <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col items-center justify-center space-x-0.5 mb-6">
                        <h3 className="font-bevietnam text-[20px] font-normal text-[#141219] mb-4 text-center">Fue Hair Transplant</h3>
                        <p className="text-gray-600 text-center leading-relaxed mb-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
                        </p>
                        <Button className="w-[220px] h-[50px] text-[16px] border-none bg-[#3C2031] hover:bg-[#4a2e4a] text-[#FCD9A1] rounded-2xl flex items-center justify-center gap-2">
                            Explore More
                            <ArrowRight className="w-4 h-4 text-[#FCD9A1]" />
                        </Button>
                    </div>
                </div>
                {/* Treatment Card 3*/}
                <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col items-center justify-center space-x-0.5 mb-6">
                        <h3 className="font-bevietnam text-[20px] font-normal text-[#141219] mb-4 text-center">Fue Hair Transplant</h3>
                        <p className="text-gray-600 text-center leading-relaxed mb-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
                        </p>
                        <Button className="w-[220px] h-[50px] text-[16px] border-none bg-[#3C2031] hover:bg-[#4a2e4a] text-[#FCD9A1] rounded-2xl flex items-center justify-center gap-2">
                            Explore More
                            <ArrowRight className="w-4 h-4 text-[#FCD9A1]" />
                        </Button>
                    </div>
                </div>
                {/* Treatment Card 4*/}
                <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col items-center justify-center space-x-0.5 mb-6">
                        <h3 className="font-bevietnam text-[20px] font-normal text-[#141219] mb-4 text-center">Fue Hair Transplant</h3>
                        <p className="text-gray-600 text-center leading-relaxed mb-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
                        </p>
                        <Button className="w-[220px] h-[50px] text-[16px] border-none bg-[#3C2031] hover:bg-[#4a2e4a] text-[#FCD9A1] rounded-2xl flex items-center justify-center gap-2">
                            Explore More
                            <ArrowRight className="w-4 h-4 text-[#FCD9A1]" />
                        </Button>
                    </div>
                </div>
            </div>
            <Button className="mt-10 w-[260px] h-[50px] border-2 border-[#3C2031] text-[#3C2031] bg-transparent  hover hover:bg-[#3C2031] hover:text-[#FCD9A1] rounded-2xl px-8 py-3 text-lg font-medium flex items-center justify-center gap-2">
                View All Treatments
                {/* <ArrowRight className="w-6 h-6 text-[#3C2031] hover:text-[#FCD9A1]" />*/}
            </Button>
        </div>
    )
}
export default Treatments