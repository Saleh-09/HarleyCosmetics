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
            />
            <WhyChooseUs/>
            <Features/>
            <Transformations/>
            <Branches/>
            <Banner/>
            <Footer/>
        </div>
    )
}
export default About