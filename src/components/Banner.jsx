import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const Banner = () => {
    return (
            <div className="flex items-center justify-center min-h-[400px]">
            <section className="py-10 w-[1250px] bg-[#3C2031] overflow-hidden rounded-[20px]">
                <div className="max-w-7xl mx-auto px-10 relative z-10">
                <div className="flex flex-col items-center justify-center text-center gap-6">
                    
                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
                    Take the First Step Towards a More 
                    <br/>
                    Confident You.
                    </h2>

                    {/* Paragraph */}
                    <p className="text-lg text-white/90 max-w-xl">
                    Book your consultation today and let our experts guide you through your treatment journey.
                    </p>

                    {/* Button */}
                   <Link
                    to="/contact"
                    className="bg-[#FCD9A1] hover:bg-yellow-500 text-[#3C2031] font-semibold px-10 py-5 rounded-2xl text-lg flex items-center gap-2 shadow-lg"
                    >
                    Book Free Consultation
                    <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
                </div>
            </section>
            </div>
    )
}
export default Banner;