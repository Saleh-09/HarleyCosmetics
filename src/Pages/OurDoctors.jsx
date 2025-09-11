import HeroHeader from "@/components/HeroHeader";
import React from "react";
import DrZakar from "../assets/DoctorImages/Dr.ZakarRafiq.svg";
import DrHaider from "../assets/DoctorImages/Dr.HaiderGillani.svg";
import DrMahdi from "../assets/DoctorImages/Dr.MahdiAlosert.svg";
import DrMasood from "../assets/DoctorImages/Dr.MasoodMunir.svg";
import DrSami from "../assets/DoctorImages/Dr.SamiMirza.svg";
import DrShuaib from "../assets/DoctorImages/Dr.ShuaibMir.svg";
import DrVishalNayak from "../assets/DoctorImages/Dr.VishalNayak.svg";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

const OurDoctors = () => {
    return(
        <div className="w-screen min-h-screen overflow-x-hidden">
            <HeroHeader
            title="Meet Our Specialists Behind Every Successful Transformation"
            badge="Our Doctors"
            height="h-[365px]"
            />
            <div className="max-w-7xl mx-auto px-4 mb-15">
                {/* Doctors Badge */}
                <div className="flex justify-center mb-4">
                    <span className="text-[#3C2031] text-[25px] font-semibold">Surgeons</span>
                </div>
                <div className="text-center mb-12">
                    <h2 className="text-[#141219] font-bold text-4xl md:text-5xl mb-4">
                        Our Experienced Hair Surgeons
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Get to know the certified surgeons and medical experts dedicated to delivering the best possible results.
                    </p>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-13">
                    {/* Doctor Card 1 */}
                    <div>
                        <img className="mb-3"
                        src={DrZakar}
                        alt="DrZakar"
                        />
                        <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">Dr. Zakar Rafiq</h2>
                        <h3 className="text-xl font-medium text-gray-600 mb-2 text-center">Hair Transplant Surgeon</h3>
                        <p className="text-gray-600 text-center text-[17px] leading-relaxed mb-5">
                        4000+ hair restoration surgeries | Expert in advanced hair loss & alopecia treatments
                        </p>
                    </div>
                    
                    {/* Doctor Card 2 */}
                    <div>
                        <img className="mb-3"
                        src={DrHaider}
                        alt="DrHaider"
                        />
                        <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">Dr Haider Gillani</h2>
                        <h3 className="text-xl font-medium text-gray-600 mb-2 text-center">Hair Transplant Surgeon</h3>
                        <p className="text-gray-600 text-center text-[17px] leading-relaxed mb-5 ">
                        3000+ FUE procedures | Specialist in hairline design & Afro-Caribbean hair types
                        </p>
                    </div>
                    
                    {/* Doctor Card 3 */}
                    <div>
                        <img className="mb-3"
                        src={DrMahdi}
                        alt="DrMahdi"
                        />
                        <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">Dr. Mahdi Alosert</h2>
                        <h3 className="text-xl font-medium text-gray-600 mb-2 text-center">Hair Transplant Surgeon</h3>
                        <p className="text-gray-600 text-center text-[17px] leading-relaxed mb-5">
                        2000+ hair restoration surgeries | Expert in FUE & aesthetic treatments 
                        </p>
                    </div>
                    
                    {/* Doctor Card 4 */}
                    <div>
                        <img className="mb-3"
                        src={DrMasood}
                        alt="DrMasood"
                        />
                        <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">Dr. Masood Munir</h2>
                        <h3 className="text-xl font-medium text-gray-600 mb-2 text-center">Hair Transplant Surgeon</h3>
                        <p className="text-gray-600 text-center text-[17px] leading-relaxed">
                        1500+ hair restoration surgeries | Specialist in FUE & Afro hair transplants 
                        </p>
                    </div>
                    
                    {/* Doctor Card 5 */}
                    <div>
                        <img className="mb-3"
                        src={DrSami}
                        alt="DrSami"
                        />
                        <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">Dr. Sami Mirza</h2>
                        <h3 className="text-xl font-medium text-gray-600 mb-2 text-center">Hair Transplant Surgeon</h3>
                        <p className="text-gray-600 text-center text-[17px] leading-relaxed">
                        1000+ hair restoration surgeries | Specialist in FUE, Afro & unshaven transplants 
                        </p>
                    </div>
                    
                    {/* Doctor Card 6 */}
                    <div>
                        <img className="mb-3"
                        src={DrShuaib}
                        alt="DrShuaib"
                        />
                        <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">Dr. Shuaib Mir</h2>
                        <h3 className="text-xl font-medium text-gray-600 mb-2 text-center">Hair Transplant Surgeon</h3>
                        <p className="text-gray-600 text-center text-[17px] leading-relaxed">
                        1000+ hair restoration surgeries | Specialist in FUE, PRP, mesotherapy & natural hairline design
                        </p>
                    </div>
                    {/* Doctor Card 7 */}
                    <div>
                        <img className="mb-3"
                        src={DrVishalNayak}
                        alt="DrVishalNayak"
                        />
                        <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">Dr. Vishal Nayak</h2>
                        <h3 className="text-xl font-medium text-gray-600 mb-2 text-center">Hair Transplant Surgeon</h3>
                        <p className="text-gray-600 text-center text-[17px] leading-relaxed mb-5">
                        3000 successful patients. | Specializes in FUE/non-shaven hair transplant technique
                        </p>
                    </div>
                </div>
            </div>
            <Banner/>
            <Footer/>
        </div>
    )
}
export default OurDoctors