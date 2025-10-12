import React, { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

import User1 from '../assets/CustomerImages/User1.jpeg';
import User2 from '../assets/CustomerImages/User2.jpeg';
import User3 from '../assets/CustomerImages/User3.jpg';
import User4 from '../assets/CustomerImages/User4.jpeg';
import User5 from '../assets/CustomerImages/User5.jpeg';
import User6 from '../assets/CustomerImages/User6.jpg';

export const testimonials = [
  { img: User1, name: "Rajiv Purohit", role: "Patient", text: "Good quality service from Dr Vishal and the team. Made me feel comfortable from the beginning." },
  { img: User2, name: "Matthew White", role: "Patient", text: "Absolutely blown away from start to finish. Professional service and great aftercare." },
  { img: User3, name: "Mirabel Redwyne", role: "Patient", text: "Dr. Haider Gillani exceeded all expectations. Extremely knowledgeable and made me feel at ease." },
  { img: User4, name: "Sophia Turner", role: "Patient", text: "Very friendly staff and a smooth experience overall. Would highly recommend to others." },
  { img: User5, name: "Daniel Carter", role: "Patient", text: "The consultation was detailed and the care was exceptional. Truly satisfied with the results." },
  { img: User6, name: "Emma Johnson", role: "Patient", text: "The team made me feel very comfortable. Excellent service and great follow-up support." }
];

const Testimonial = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 relative mb-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-gray-900 font-bold text-4xl md:text-5xl mb-4">
          Hear From Our Happy Patients
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Watch real experiences and success stories shared by our clients.
        </p>
      </div>

      {/* Arrows */}
      <button
        onClick={scrollLeft}
        className="absolute -left-4 top-1/2 -translate-y-1/2 bg-[#3C2031] shadow-md w-10 h-10 rounded-full flex items-center justify-center hover:shadow-lg transition cursor-pointer"
      >
        <ChevronLeft color="#FCD9A1" size={25} />
      </button>

      <button
        onClick={scrollRight}
        className="absolute -right-4 top-1/2 -translate-y-1/2 bg-[#3C2031] shadow-md w-10 h-10 rounded-full flex items-center justify-center hover:shadow-lg transition cursor-pointer"
      >
        <ChevronRight color="#FCD9A1" size={20} />
      </button>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar py-6"
      >
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="min-w-[320px] md:min-w-[360px] bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden cursor-pointer"
          >
            <div className="p-6 py-8">
              <div className="flex items-center gap-4 mb-4">
                <img src={item.img} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
