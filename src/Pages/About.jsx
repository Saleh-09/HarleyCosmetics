import Banner from "@/components/Banner";
import Branches from "@/components/Branches";
import Features from "@/components/Feature";
import HeroHeader from "@/components/HeroHeader";
import Transformations from "@/components/Tranformations";
import WhyChooseUs from "@/components/WhyChooseUs";
import React from "react";
import { useState } from "react";
import ClinicImage from "../assets/clinic.svg"; // replace with your image path
import Footer from "@/components/Footer";

const About = () => {
    return (
        <div>
            <HeroHeader
            title="Trusted Experts Dedicated to Natural Hair Transformation"
            badge="Who We Are"
            height="h-[365px]"
            />
            <WhyChooseUs
            image={ClinicImage}
            alt="Hair Transplant Clinic"
            subtitle="Why Choose Us"
            title="Welcome To Hair Transplant Center"
            description="At our Hair Transplant Center, we provide world-class treatments with 
                         personalized care. Our team of experts is dedicated to ensuring natural-looking results
                         and a comfortable experience, helping you regain confidence with every step of the journey."
            />
            <Features/>
            <Transformations/>
            <Branches/>
            <Banner/>
            <Footer/>
        </div>
    )
}
export default About