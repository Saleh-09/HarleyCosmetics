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
                {/* Treatment Card 1*/}
                <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col  items-center justify-center space-x-0.5 mb-6">
                        <h3 className="font-bevietnam text-[24px] font-medium text-[#141219] mb-6 text-center">
                            Fue Hair Transplant</h3>
                        <p className="text-gray-600 text-center leading-relaxed mb-6">
                           Minimally invasive procedure using follicular unit extraction for natural, permanent hair restoration.
                        </p>
                        <Button className="w-[310px] h-[50px] text-[16px] border-none bg-[#3C2031] hover:bg-[#4a2e4a] text-[#FCD9A1] rounded-2xl flex items-center justify-center gap-2">
                            <Link to="/male/fue-hair-transplant" className="flex items-center justify-center gap-2 hover:cursor-pointer">
                                <p className="text-[15px]">Explore More</p>
                                <ArrowRight className="w-4 h-4 text-[#FCD9A1]" />
                            </Link>
                        </Button>

                    </div>
                </div>
                {/* Treatment Card 2*/}
                <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col  items-center justify-center space-x-0.5 mb-6">
                        <h3 className="font-bevietnam text-[24px] font-medium text-[#141219] mb-6 text-center">
                            Beard Transplant</h3>
                        <p className="text-gray-600 text-center leading-relaxed mb-6">
                           Enhances facial hair density and symmetry with precise graft placement for a fuller, natural beard.
                        </p>
                        <Button className="w-[310px] h-[50px] text-[16px] border-none bg-[#3C2031] hover:bg-[#4a2e4a] text-[#FCD9A1] rounded-2xl flex items-center justify-center gap-2">
                            <Link to="/male/beard-transplant" className="flex items-center justify-center gap-2 hover:cursor-pointer">
                                <p className="text-[15px]">Explore More</p>
                                <ArrowRight className="w-4 h-4 text-[#FCD9A1]" />
                            </Link>
                        </Button>

                    </div>
                </div>
                {/* Treatment Card 3*/}
                <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col  items-center justify-csnter space-x-0.5 mb-6">
                        <h3 className="font-bevietnam text-[24px] font-medium text-[#141219] mb-6 text-center">
                           Eyebrow Transplant</h3>
                        <p className="text-gray-600 text-center leading-relaxed mb-6">
                           Restores thin or patchy eyebrows with meticulous follicle implantation for a natural, defined look.
                        </p>
                        <Button className="w-[310px] h-[50px] text-[16px] border-none bg-[#3C2031] hover:bg-[#4a2e4a] text-[#FCD9A1] rounded-2xl flex items-center justify-center gap-2">
                            <Link to="/male/eyebrow-transplant" className="flex items-center justify-center gap-2 hover:cursor-pointer">
                                <p className="text-[15px]">Explore More</p>
                                <ArrowRight className="w-4 h-4 text-[#FCD9A1]" />
                            </Link>
                        </Button>

                    </div>
                </div>
                {/* Treatment Card 4*/}
                <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col  items-center justify-center space-x-0.5 mb-6">
                        <h3 className="font-bevietnam text-[24px] font-medium text-[#141219] mb-6 text-center">
                            Female Hair Transplant</h3>
                        <p className="text-gray-600 text-center leading-relaxed mb-6">
                           Advanced solutions for women experiencing thinning or hair loss, restoring natural volume and hairline.
                        </p>
                        <Button className="w-[310px] h-[50px] text-[16px] border-none bg-[#3C2031] hover:bg-[#4a2e4a] text-[#FCD9A1] rounded-2xl flex items-center justify-center gap-2">
                            <Link to="/male/afro-hair-transplant" className="flex items-center justify-center gap-2 hover:cursor-pointer">
                                <p className="text-[15px]">Explore More</p>
                                <ArrowRight className="w-4 h-4 text-[#FCD9A1]" />
                            </Link>
                        </Button>

                    </div>
                </div>
                {/* Treatment Card 5*/}
                <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col  items-center justify-center space-x-0.5 mb-6">
                        <h3 className="font-bevietnam text-[24px] font-medium text-[#141219] mb-6 text-center">
                            Afro Hair Transplant</h3>
                        <p className="text-gray-600 text-center leading-relaxed mb-6">
                           Specialised technique tailored for Afro-Caribbean hair, ensuring natural curl pattern and density.
                        </p>
                        <Button className="w-[310px] h-[50px] text-[16px] border-none bg-[#3C2031] hover:bg-[#4a2e4a] text-[#FCD9A1] rounded-2xl flex items-center justify-center gap-2">
                            <Link to="/male/afro-hair-transplant" className="flex items-center justify-center gap-2 hover:cursor-pointer">
                                <p className="text-[15px]">Explore More</p>
                                <ArrowRight className="w-4 h-4 text-[#FCD9A1]" />
                            </Link>
                        </Button>

                    </div>
                </div>
                {/* Treatment Card 6*/}
                <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col  items-center justify-csnter space-x-0.5 mb-6">
                        <h3 className="font-bevietnam text-[24px] font-medium text-[#141219] mb-6 text-center">
                            Un-Shaven Hair Transplant</h3>
                        <p className="text-gray-600 text-center leading-relaxed mb-6">
                           Discreet procedure performed without shaving, ideal for maintaining your existing hairstyle.
                        </p>
                        <Button className="w-[310px] h-[50px] text-[16px] border-none bg-[#3C2031] hover:bg-[#4a2e4a] text-[#FCD9A1] rounded-2xl flex items-center justify-center gap-2">
                            <Link to="/male/unshaven-hair-transplant" className="flex items-center justify-center gap-2 hover:cursor-pointer">
                                <p className="text-[15px]">Explore More</p>
                                <ArrowRight className="w-4 h-4 text-[#FCD9A1]" />
                            </Link>
                        </Button>

                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Treatments