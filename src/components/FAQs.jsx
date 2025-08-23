import React from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const FAQs = ({ limit }) => {
  const faqs = [
    {
      question: "How long does a hair transplant procedure take?",
      answer:
        "The duration depends on the technique (FUE or FUT) and the number of grafts required. On average, it can take 4 to 8 hours.",
    },
    {
      question: "Is a hair transplant permanent?",
      answer:
        "Yes, transplanted hair is usually permanent because it comes from areas resistant to hair loss.",
    },
    {
      question: "Does the procedure hurt?",
      answer:
        "Most patients report minimal discomfort thanks to local anesthesia during the procedure.",
    },
    {
      question: "How long is the recovery period?",
      answer:
        "Recovery typically takes 7–10 days, but most people return to work within a few days.",
    },
    {
      question: "When will I see results?",
      answer:
        "New hair growth usually starts 3–4 months post-surgery, with full results visible after 9–12 months.",
    },
    {
      question: "Will it look natural?",
      answer:
        "Absolutely! Modern techniques ensure natural-looking results with proper hairline design.",
    },
    {
      question: "Are there any risks?",
      answer:
        "Like any procedure, minor risks exist, but complications are rare when performed by experts.",
    },
    {
      question: "Can women also undergo hair transplants?",
      answer:
        "Yes, women experiencing hair thinning or baldness can also benefit from hair transplantation.",
    },
    {
      question: "How much does it cost?",
      answer:
        "The cost varies depending on the number of grafts and technique used. A consultation can provide an exact estimate.",
    },
  ];

  // If limit is provided, slice the array
  const displayedFaqs = limit ? faqs.slice(0, limit) : faqs;

  return (
    <div>
      {/* Features Badge */}
      <div className="flex justify-center mb-8">
        <span className="bg-[#3C2031] text-[#FCD9A1] px-6 py-4 rounded-full text-sm font-medium">
          FAQs
        </span>
      </div>

      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#141219] mb-4">
          Your Questions, Answered by Experts
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Find clear, detailed answers to the most common queries about our
          procedures and recovery process.
        </p>
      </div>

      {/* FAQs Section */}
      <div className="max-w-5xl mx-auto px-4 mb-6">
        <Accordion type="single" className="max-w-5xl" collapsible>
          {displayedFaqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-[23px] font-medium text-[#3C2031]">
                {index + 1}. {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[18px] text-gray-700">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Show Button only if limited */}
      {limit && (
        <div className="flex justify-center">
          <Button className="mt-6 mb-15 w-[260px] h-[50px] border-2 border-[#3C2031] text-[#3C2031] bg-transparent hover hover:bg-[#3C2031] hover:text-[#FCD9A1] rounded-2xl px-8 py-3 text-lg font-medium flex items-center justify-center gap-2">
            <Link to="/faqs">View All FAQs</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default FAQs;
