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
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, dolorem!",
    },
    {
      question: "Why to use Swapzilla?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      question: "How can I change the Origin Chain?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      question: "Soru 4",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      question: "Soru 5",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      question: "Soru 6",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      question: "Soru 7",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      question: "Soru 8",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
  ];
  return (
    <section className="w-[400px]">
      <h1 className="text-4xl font-bold mb-4">FAQ</h1>
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
