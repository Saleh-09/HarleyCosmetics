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
            alt={alt}
            className="w-[350px] h-[261px] md:w-[648px] md:h-[491px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 text-left">
          <span className="uppercase text-sm font-semibold tracking-widest text-[#3C2031]">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-900 leading-tight">
            Welcome To Hair Transplant Center
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, ve
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;