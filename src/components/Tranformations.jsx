import React from "react";
import Patient1Before from "../assets/PatientImages/Patient1Before.svg"
import Patient1After from "../assets/PatientImages/Patient1After.svg"
import Patient2Before from "../assets/PatientImages/Patient2Before.svg"
import Patient2After from "../assets/PatientImages/Patient2After.svg"
import Patient3Before from "../assets/PatientImages/Patient3Before.svg"
import Patient3After from "../assets/PatientImages/Patient3After.svg"
import Patient4Before from "../assets/PatientImages/Patient4Before.svg"
import Patient4After from "../assets/PatientImages/Patient4After.svg"
import Patient5Before from "../assets/PatientImages/Patient5Before.svg"
import Patient5After from "../assets/PatientImages/Patient5After.svg"
import Patient6Before from "../assets/PatientImages/Patient6Before.svg"
import Patient6After from "../assets/PatientImages/Patient6After.svg"

const FlipCard = ({ beforeImage, afterImage, title, description }) => {
  return (
    <div className="relative w-full h-[380px] group cursor-pointer perspective">
      <div
        className="relative w-full h-full transition-transform duration-700 ease-in-out preserve-3d group-hover:rotate-y-180"
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full rounded-lg bg-cover bg-center shadow-lg backface-hidden"
          style={{
            backgroundImage: `url(${beforeImage})`,
          }}
        >
          {/* Badge */}
          <div className="absolute top-4 left-4 bg-gray-800 text-white text-xs px-4 py-1 rounded-full shadow-md">
            BEFORE
          </div>

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-white/95 p-4">
            <h3 className="text-gray-900 text-lg font-bold">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full rounded-lg bg-cover bg-center shadow-lg rotate-y-180 backface-hidden"
          style={{
            backgroundImage: `url(${afterImage})`,
          }}
        >
          {/* Badge */}
          <div className="absolute top-4 left-4 bg-emerald-600 text-white text-xs px-4 py-1 rounded-full shadow-md">
            AFTER
          </div>

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-white/95 p-4">
            <h3 className="text-gray-900 text-lg font-bold">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};



const Transformations=()=>{
    return(
        <div className="max-w-7xl mx-auto px-4 mb-15">
            {/* Transformations Badge */}
            <div className="flex justify-center mb-4">
                <span className="text-[#3C2031] text-[25px] font-semibold">Transformations</span>
            </div>
            {/* Section Header */}
            <div className="text-center mb-12">
                <h2 className="text-[#141219] font-bold text-4xl md:text-5xl mb-4">See the Transformations for Yourself</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">Every picture tells a story of renewed confidence and a fresh start, explore the visible difference of our  treatments.</p>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* Flip Card Component */}
                <FlipCard
                    beforeImage={Patient1Before}
                    afterImage={Patient1After}
                    title="Hair Transplant"
                    description="Donor Area: Back of scalp | Result Time: 8 Months"
                />
                <FlipCard
                    beforeImage={Patient2Before}
                    afterImage={Patient2After}
                    title="Hair Transplant"
                    description="Donor Area: Back of scalp | Result Time: 8 Months"
                />
                <FlipCard
                    beforeImage={Patient3Before}
                    afterImage={Patient3After}
                    title="Hair Transplant"
                    description="Donor Area: Back of scalp | Result Time: 8 Months"
                />
                <FlipCard
                    beforeImage={Patient4Before}
                    afterImage={Patient4After}
                    title="Hair Transplant"
                    description="Donor Area: Back of scalp | Result Time: 8 Months"
                />
                <FlipCard
                    beforeImage={Patient5Before}
                    afterImage={Patient5After}
                    title="Hair Transplant"
                    description="Donor Area: Back of scalp | Result Time: 8 Months"
                />
                <FlipCard
                    beforeImage={Patient6Before}
                    afterImage={Patient6After}
                    title="Hair Transplant"
                    description="Donor Area: Back of scalp | Result Time: 8 Months"
                />
            </div>
        </div>
    )
}
export default Transformations