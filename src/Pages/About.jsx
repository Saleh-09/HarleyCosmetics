import Banner from "@/components/Banner";
import Branches from "@/components/Branches";
import Features from "@/components/Feature";
import HeroHeader from "@/components/HeroHeader";
import Transformations from "@/components/Tranformations";
import WhyChooseUs from "@/components/WhyChooseUs";
import React from "react";
import { useState } from "react";
import ClinicImage from "../assets/clinic.svg";
import Footer from "@/components/Footer";

const About = () => {
    return (
        <div>
            <HeroHeader
            title="Trusted Experts Dedicated to Natural Hair Transformation"
            badge="Who We Are"
            height="h-[365px]"
            useVideo={false}
            showOverlay={true}
            showContent={true}
            />
            <WhyChooseUs/>
            <Features/>
            <Branches/>
            <div className="max-w-7xl mx-auto px-3"> 
              <Banner/>
            </div>
            <Footer/>
        </div>
    )
}
export default About