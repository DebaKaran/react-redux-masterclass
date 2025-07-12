import React, { useState } from "react";

interface Item {
  label: string;
  content: string;
}

interface AccordionProps {
  items: Item[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(0); //0 means the first section is open by default.

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const content = isExpanded && <div>{item.content}</div>;

    return (
      <div key={index}>
        <div>{item.label}</div>
        {content}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
};

export default Accordion;
