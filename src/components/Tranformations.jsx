import React from "react";
import Patient1 from "../assets/Patient1.svg";
import Patient2 from "../assets/Patient2.svg";
import Patient3 from "../assets/Patient3.svg";
import Patient4 from "../assets/Patient4.svg";
import Patient5 from "../assets/Patient5.svg";
import Patient6 from "../assets/Patient6.svg";
const Transformations=()=>{
    return(
        <div className="max-w-7xl mx-auto px-4 mb-15">
            <div className="flex justify-center mb-8">
                <span className="bg-[#3C2031] text-[#FCD9A1] px-6 py-4 rounded-full text-base font-medium">Befor vs After</span>
            </div>
            <div className="text-center mb-12">
                <h2 className="text-[#141219] font-bold text-4xl md:text-5xl mb-4">See the Transformations for Yourself</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">Every picture tells a story of renewed confidence and a fresh start, explore the visible difference of our  treatments.</p>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div>
                    <img className="mb-3 roun"
                      src={Patient1}
                      alt="firstTranformation"
                    />
                    <h2 className="text-xl font-semibold text-gray-900 mb-2 text-center">Hair Transplant</h2>
                    <p className="text-gray-600 text-center leading-relaxed">
                        2,000 Grafts| Donor Area: Back of scalp | Result Time: 8 Months
                    </p>
                </div>

                <div>
                    <img className="mb-3"
                      src={Patient2}
                      alt="firstTranformation"
                    />
                    <h2 className="text-xl font-semibold text-gray-900 mb-2 text-center">Hair Transplant</h2>
                    <p className="text-gray-600 text-center leading-relaxed">
                        2,000 Grafts| Donor Area: Back of scalp | Result Time: 8 Months
                    </p>
                </div>

                <div>
                    <img className="mb-3"
                      src={Patient3}
                      alt="firstTranformation"
                    />
                    <h2 className="text-xl font-semibold text-gray-900 mb-2 text-center">Hair Transplant</h2>
                    <p className="text-gray-600 text-center leading-relaxed">
                        2,000 Grafts| Donor Area: Back of scalp | Result Time: 8 Months
                    </p>
                </div>

                 <div>
                    <img className="mb-3"
                      src={Patient4}
                      alt="firstTranformation"
                    />
                    <h2 className="text-xl font-semibold text-gray-900 mb-2 text-center">Beard Transplant</h2>
                    <p className="text-gray-600 text-center leading-relaxed">
                        2,000 Grafts| Donor Area: Back of scalp | Result Time: 8 Months
                    </p>
                </div>

                <div>
                    <img className="mb-3"
                      src={Patient5}
                      alt="firstTranformation"
                    />
                    <h2 className="text-xl font-semibold text-gray-900 mb-2 text-center">Beard Transplant</h2>
                    <p className="text-gray-600 text-center leading-relaxed">
                        2,000 Grafts| Donor Area: Back of scalp | Result Time: 8 Months
                    </p>
                </div>

                <div>
                    <img className="mb-3"
                      src={Patient6}
                      alt="firstTranformation"
                    />
                    <h2 className="text-xl font-semibold text-gray-900 mb-2 text-center">Beard Transplant</h2>
                    <p className="text-gray-600 text-center leading-relaxed">
                        2,000 Grafts| Donor Area: Back of scalp | Result Time: 8 Months
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Transformations