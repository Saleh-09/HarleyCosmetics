import React from "react";
import TestimonialVideo from "../assets/testimonial-Man.svg"
import { Play, Star } from "lucide-react"

const Testimonial = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 mb-15">
            {/* Testimonial Badge */}
            <div className="flex justify-center mb-4">
                <span className="text-[#3C2031] text-[25px] font-semibold">Testimonials</span>
            </div>
            {/* Section Header */}
            <div className="text-center mb-12">
                <h2 className="text-[#141219] font-bold text-4xl md:text-5xl mb-4">
                    Hear From Our Happy Patients
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Watch real experiences and success stories shared by our clients.
                </p>
            </div>
            {/* Testimonial Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Testimonial Card 1 */}
                <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden h-fit">
                    {/* Card Content */}
                    <div className="p-6 py-8">
                        <div className="flex items-start justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">James Smith</h3>
                            {/* Rating */}
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                        </div>
                        
                        {/* Testimonial Text */}
                        <p className="text-gray-600 text-justify leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                            Pellentesque sit amet sapien fringilla, mattis ligula consectetur.
                        </p>
                    </div>
                </div>
                {/* Testimonial Card 2 */}
                <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden h-fit">
                    {/* Card Content */}
                    <div className="p-6 py-8">
                        <div className="flex items-start justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">James Smith</h3>
                            {/* Rating */}
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                        </div>
                        
                        {/* Testimonial Text */}
                        <p className="text-gray-600 text-justify leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                            Pellentesque sit amet sapien fringilla, mattis ligula consectetur.
                        </p>
                    </div>
                </div>
                {/* Testimonial Card 3 */}
                <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden h-fit">
                    {/* Card Content */}
                    <div className="p-6 py-8">
                        <div className="flex items-start justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">James Smith</h3>
                            {/* Rating */}
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                        </div>
                        
                        {/* Testimonial Text */}
                        <p className="text-gray-600 text-justify leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                            Pellentesque sit amet sapien fringilla, mattis ligula consectetur.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Testimonial