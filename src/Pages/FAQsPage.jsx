import Banner from "@/components/Banner";
import FAQs from "@/components/FAQs";
import HeroHeader from "@/components/HeroHeader";
import React from "react";

const FAQsPage = () => {
    return(
        <div>
            <HeroHeader
            title="Trusted Experts Dedicated to Natural Hair Transformation"
            badge="FAQs"
            height="h-[365px]"
            />
            <FAQs/>
            <Banner/>
        </div>
    )
}
export default FAQsPage