import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQs = () => {
    return (
        <div>
            {/* Features Badge */}
            <div className="flex justify-center mb-8">
                <span className="bg-[#3C2031] text-[#FCD9A1]  px-6 py-4 rounded-full text-sm font-medium">
                    FAQs
                </span>
            </div>

            {/* Section Header */}
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-[#141219] mb-4">Your Questions, Answered by Experts</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Find clear, detailed answers to the most common queries about our procedures and recovery process.
                </p>
            </div>
            {/* FAQs Section */}
            <div className="max-w-5xl mx-auto px-4 mb-15">
                <Accordion type="single" className="max-w-5xl" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger  className="text-[23px] font-medium text-[#3C2031]">
                            1. How long does a hair transplant procedure take?
                        </AccordionTrigger>
                        <AccordionContent className="text-[18px] text-gray-700">
                        The duration depends on the technique (FUE or FUT) and the number of grafts required. 
                        On average, it can take 4 to 8 hours.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
        
    )
}
export default FAQs