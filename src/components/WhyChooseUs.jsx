import React from "react";
import ClinicImage from "../assets/clinic.svg"; // replace with your image path

const WhyChooseUs = ({ 
  image, 
  subtitle, 
  title, 
  description 
}) => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Left Image (always fixed size) */}
        <div className="flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-[265px] md:w-[648px] md:h-[491px] h-auto object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 text-left">
          <span className="uppercase text-sm font-semibold tracking-widest text-[#3C2031]">
            {subtitle}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-900 leading-tight">
             {title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;