import React from "react";
import Herobg from "../assets/HeroImage.png"
const HeroHeader =()=>{
    return(
        <div
            className="relative h-[600px] bg-cover bg-center bg-no-repeat mb-15"
            style={{ backgroundImage: `url(${Herobg})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white max-w-4xl px-4">
                <h1 className="text-5xl md:text-7xl font-medium mb-6 leading-tight font-bevietnam">
                Hair Transplants
                <br />
                To Restore Your Natural
                <br />
                Look
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                </p>
            </div>
            </div>
        </div>
    )
}
export default HeroHeader