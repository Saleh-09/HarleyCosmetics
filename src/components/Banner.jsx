import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const Banner = () => {
    return (
        <div className="flex items-center justify-center min-h-[400px]">
            <section className="py-16 w-[1250px] bg-[#3C2031] overflow-hidden rounded-[20px]">
                <div className="max-w-7xl mx-auto px-10 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        {/* Left Content */}
                        <div className="flex-1 text-white">
                        <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-tight">
                            Take the First Step Towards a More 
                            <br/>
                            Confident You.
                        </h2>
                        <p className="text-lg text-white/90 max-w-lg">
                            Book your consultation today and let our experts guide you through your treatment journey.
                        </p>
                        </div>

                        {/* Right CTA Button */}
                        <div className="flex-shrink-0">
                        <Button className="bg-[#FCD9A1] hover:bg-yellow-500 text-[#3C2031] font-semibold px-10 py-7 rounded-2xl text-lg flex items-center gap-2 shadow-lg">
                            Book Free Consultation
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Banner;