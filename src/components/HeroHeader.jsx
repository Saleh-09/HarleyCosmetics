import React from "react";
import Herobg from "../assets/HeroImage.png"
const HeroHeader = ({ 
  title, 
  subtitle, 
  badge, 
  height = "h-[600px]" // default height if not provided
}) => {
    return(
        <div
            className={`relative ${height} bg-cover bg-center bg-no-repeat mb-15`}
            style={{ backgroundImage: `url(${Herobg})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center text-white max-w-4xl px-4">
                {badge && (
                    <span className="inline-block bg-[#3C2031] text-[#FCD9A1] px-6 py-4 rounded-full text-sm font-medium mb-4">
                    {badge}
                    </span>
                )}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mb-6 leading-tight font-bevietnam">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                    {subtitle}
                    </p>
                )}
                </div>
            </div>
        </div>
    )
}
export default HeroHeader