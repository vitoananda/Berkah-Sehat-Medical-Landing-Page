import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

type FAQ = {
  type: string;
  description: string;
};

type AccordionProps = {
  descriptions: FAQ[];
};

const CustomAccordion = ({ descriptions }: AccordionProps) => {
  return (
    <Accordion className="custom-accordion">
      {descriptions.map((faq, index) => (
        <AccordionItem key={index}>
          <AccordionItemButton>{faq.type}</AccordionItemButton>
          <AccordionItemPanel>{faq.description}</AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

type IVerticalFeatureRowProps = {
  descriptions: FAQ[];
  image: string;
  imageAlt: string;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const { descriptions, image, imageAlt } = props;

  return (
    <div className="mt-12 flex flex-col items-center sm:flex-row">
      <div className="w-42 sm:w-1/2 mx-2">
        <img src={image} alt={imageAlt} className="hidden sm:block" />
      </div>
      <div className="w-full sm:w-1/2 sm:px-6 flex-grow">
        <CustomAccordion descriptions={descriptions} />
      </div>
      <style jsx>{`
        .custom-accordion {
          width: 100%; 
        }
      `}</style>
    </div>
  );
};

export { VerticalFeatureRow };
