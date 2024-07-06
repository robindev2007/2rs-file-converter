import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HomePageAccordinon = () => {
  const accordions = [
    {
      question: "What is 2RS converter?",
      content:
        "2RS converter is free online tool that can convert images, videos and oudio formats on browser.",
    },
    {
      question: "Is 2RS converter free to use?",
      content: "Yes 2RS converter is free of cost.",
    },
    {
      question: "Is 2RS converter need user to login?",
      content: "No, 2RS converter free dose't requre user to login.",
    },
    {
      question: "Dose 2RS converter word on mobile devices?",
      content: "Yes, 2RS converter works on any device that have a browser.",
    },
  ];
  return (
    <div>
      <h2 className="text-2xl font-medium">FAQ</h2>

      <Accordion type="single" collapsible>
        {accordions.map((accordion) => (
          <AccordionItem key={accordion.question} value={accordion.question}>
            <AccordionTrigger>{accordion.question}</AccordionTrigger>
            <AccordionContent>{accordion.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default HomePageAccordinon;
