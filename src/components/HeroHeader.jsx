import React from "react";
import Herobg from "../assets/HeroImage.png"
import HarleyCosmeticsVideo from "../assets/Videos/HarleyCosmeticsVideo.mp4"
import HarleyCosmeticsIntoPortrait from "../assets/Videos/HarleyCosmeticsIntroPortrait.mp4"

const HeroHeader = ({ 
  title, 
  subtitle, 
  badge, 
  height = "h-[600px]", // default height if not provided
  useVideo = false, // new prop to toggle between video and image
  showOverlay = true, // new prop to control overlay visibility
  showContent = true // new prop to control content visibility
}) => {
    return(
        <div className={`relative ${height} ${useVideo ? 'overflow-hidden' : 'bg-cover bg-center bg-no-repeat'} mb-15`}
             style={!useVideo ? { backgroundImage: `url(${Herobg})` } : {}}>
            
            {/* Video Background - only renders when useVideo is true */}
            {useVideo && (
                <>
                    {/* Desktop Video - hidden on mobile */}
                    <video
                        className="absolute inset-0 w-full h-full object-cover hidden md:block"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src={HarleyCosmeticsVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Mobile Video - hidden on desktop */}
                    <video
                        className="absolute inset-0 w-full h-full object-cover block md:hidden"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src={HarleyCosmeticsIntoPortrait} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </>
            )}

            {/* Overlay - conditionally rendered */}
            {showOverlay && (
                <div className="absolute inset-0 bg-black/70"></div>
            )}

            {/* Content - conditionally rendered */}
            {showContent && (
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
            )}
        </div>
    )
}

export default HeroHeader