import React from "react";
import ClinicImage from "../assets/clinic.svg"; 

const WhyChooseUs = () => {
  return (
     <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Left Image */}
        <div className="flex-shrink-0">
          <img
            src={ClinicImage}
            alt="Clinic"
            className="w-[350px] h-[261px] md:w-[648px] md:h-[491px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 text-left">
          <span className="uppercase text-sm font-semibold tracking-widest text-[#3C2031]">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-900 leading-tight">
            Welcome To Harley Cosmetics
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
            Harley Cosmetics is one of the largest hair re-growth centres in West London, equipped with the latest technology and an expert medical and non-medical team. With all medication and surgeries taking place in our state-of-the-art clinics, Harley Cosmetics’ unique hair centres are expanding to become one of the UK’s largest and most renowned hair treatment providers. Harley Cosmetics boasts a range of A-list celebrities and athletes who have successfully undergone treatment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;