import React, { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

interface Item {
  label: string;
  content: string;
}

interface AccordionProps {
  items: Item[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex: number) => {
    console.log("STALE expandedIndex:", expandedIndex); // outside setState
    setExpandedIndex((current) => {
      console.log("UP-TO-DATE expandedIndex:", current); // this is the correct one
      return current === nextIndex ? -1 : nextIndex;
    });
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icons = (
      <span>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
    );
    const content = isExpanded && <div>{item.content}</div>;

    return (
      <div key={index}>
        <div onClick={() => handleClick(index)}>
          {item.label}
          {icons}
        </div>
        {content}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
};

export default Accordion;
