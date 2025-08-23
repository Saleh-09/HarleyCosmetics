import React from "react";
import CentralLondon from "../assets/Central London.png";
import Manchester from "../assets/Manchester.png";
import Amsterdam from "../assets/Amsterdam.png";

const Branches = () => {
    return(
        <div className="max-w-7xl mx-auto px-4 mb-15">
            {/* Branches Badge */}
            <div className="flex justify-center mb-8">
                <span className="bg-[#3C2031] text-[#FCD9A1]  px-6 py-4 rounded-full text-sm font-medium">Branches</span>
            </div>
             {/* Section Header */}
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-[#141219] mb-4">
                    Explore our Nation Wide Branches
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our expertly curated courses, chosen for their popularity, success, impact, 
                and real-world value
                </p>
            </div>
            {/* Branches Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Branch Card 1 */}
                <div className=" flex flex-col items-center">
                    <img
                        src={CentralLondon}
                        alt="Central London"
                        className="w-[420px] h-[313px] object-cover rounded-2xl shadow-lg"
                    />
                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3 text-center">Central London</h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                       221B Baker Street, Marylebone, London W1U 6SG, United Kingdom
                    </p>
                </div>
                {/* Branch Card 2 */}
                <div className=" flex flex-col items-center">
                    <img
                        src={Manchester}
                        alt="Manchester"
                        className="w-[420px] h-[313px] object-cover rounded-2xl shadow-lg"
                    />
                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3 text-center">Central London</h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                       45 King Street, Manchester M2 4LQ, United Kingdom
                    </p>
                </div>
                 {/* Branch Card 3 */}
                <div className=" flex flex-col items-center">
                    <img
                        src={Amsterdam}
                        alt="Amsterdam"
                        className="w-[420px] h-[313px] object-cover rounded-2xl shadow-lg"
                    />
                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3 text-center">Central London</h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                       221B Baker Street, Marylebone, London W1U 6SG, United Kingdom
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Branches