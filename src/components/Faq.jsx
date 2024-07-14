import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Swapzilla?",
      answer:
        "Swapzilla is a cross-chain, marketplace-based way of swapping tokens.",
    },
    {
      question: "Why to use Swapzilla?",
      answer:
        "Because Swapzilla makes it possible for you to swap tokens across different blockchains.",
    },
    {
      question: "What is the Origin Chain?",
      answer: "",
    },
    {
      question: "How can I change the Origin Chain?",
      answer:
        "As you change your current chain, the origin chain will change accordingly.",
    },
    {
      question: "What is the Target Chain?",
      answer: "",
    },
    {
      question: "What is the Deadline?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      question: "How the system works?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
  ];
  return (
    <section className="w-[400px]">
      <div className="flex justify-between items-center gap-1">
        <h1 className="text-4xl font-bold mb-4">FAQ</h1>
        <img
          src="/src/assets/faq_godzilla.svg"
          className="h-20"
          alt="Flowbite Logo"
        />
      </div>
      <Accordion type="single" className="" collapsible>
        {faqs.map((faq, index) => (
          <AccordionItem value={index}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;
