import React, { useState } from "react";
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
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    // Only trigger click flip for mobile devices
    if (window.innerWidth < 768) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-md p-[25px_15px]">
      {/* Flip Wrapper */}
      <div
        className="relative w-full h-[250px] group cursor-pointer"
        style={{ perspective: "1000px" }}
        onClick={handleFlip}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 ease-in-out ${
            isFlipped ? "rotate-y-180" : ""
          } md:group-hover:rotate-y-180`}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front Image */}
          <div
            className="absolute w-full h-full bg-cover bg-center rounded-md shadow-sm"
            style={{
              backgroundImage: `url(${beforeImage})`,
              backfaceVisibility: "hidden",
            }}
          >
            <div className="absolute top-3 left-3 bg-[#FFEBC8] border border-[#E6D3AD] text-[#3C2A1E] text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
              Before
            </div>
          </div>

          {/* Back Image */}
          <div
            className="absolute w-full h-full bg-cover bg-center rounded-md shadow-sm rotate-y-180"
            style={{
              backgroundImage: `url(${afterImage})`,
              backfaceVisibility: "hidden",
            }}
          >
            <div className="absolute top-3 left-3 bg-[#FFEBC8] border border-[#E6D3AD] text-[#3C2A1E] text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
              After
            </div>
          </div>
        </div>
      </div>

      {/* Text Below */}
      <div className="text-center mt-5">
        <h3 className="text-gray-900 text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
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