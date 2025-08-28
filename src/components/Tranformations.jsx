import React from "react";
import FirstTransformation from "../assets/Tranformation1.svg"
import Vertical from "../assets/PatientImages/Vertifcal Frames.png"
import Horizontal from "../assets/PatientImages/Horizontal Frames.png"
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
                    <img className="mb-3"
                      src={FirstTransformation}
                      alt="firstTranformation"
                    />
                    <h2 className="text-xl font-semibold text-gray-900 mb-2 text-center">Hair Transplant</h2>
                    <p className="text-gray-600 text-center leading-relaxed">
                        2,000 Grafts| Donor Area: Back of scalp | Result Time: 8 Months
                    </p>
                </div>

                <div>
                    <img className="mb-3"
                      src={Vertical}
                      alt="firstTranformation"
                    />
                    <h2 className="text-xl font-semibold text-gray-900 mb-2 text-center">Hair Transplant</h2>
                    <p className="text-gray-600 text-center leading-relaxed">
                        2,000 Grafts| Donor Area: Back of scalp | Result Time: 8 Months
                    </p>
                </div>

                <div>
                    <img className="mb-3"
                      src={Horizontal}
                      alt="firstTranformation"
                    />
                    <h2 className="text-xl font-semibold text-gray-900 mb-2 text-center">Hair Transplant</h2>
                    <p className="text-gray-600 text-center leading-relaxed">
                        2,000 Grafts| Donor Area: Back of scalp | Result Time: 8 Months
                    </p>
                </div>

                 <div>
                    <img className="mb-3"
                      src={FirstTransformation}
                      alt="firstTranformation"
                    />
                    <h2 className="text-xl font-semibold text-gray-900 mb-2 text-center">Beard Transplant</h2>
                    <p className="text-gray-600 text-center leading-relaxed">
                        2,000 Grafts| Donor Area: Back of scalp | Result Time: 8 Months
                    </p>
                </div>

                <div>
                    <img className="mb-3"
                      src={FirstTransformation}
                      alt="firstTranformation"
                    />
                    <h2 className="text-xl font-semibold text-gray-900 mb-2 text-center">Beard Transplant</h2>
                    <p className="text-gray-600 text-center leading-relaxed">
                        2,000 Grafts| Donor Area: Back of scalp | Result Time: 8 Months
                    </p>
                </div>

                <div>
                    <img className="mb-3"
                      src={FirstTransformation}
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