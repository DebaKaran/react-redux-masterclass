import React, { useEffect, useRef, useState } from "react";
import type { DropDownOption, DropdownProps } from "../types/DropDown.types";
import Panel from "./Panel";
import { GoChevronDown } from "react-icons/go";

const DropDown: React.FC<DropdownProps> = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const divElRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      //console.log(divElRef.current);
      if (
        divElRef.current &&
        !divElRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false); // click happened outside
      }
    };

    document.addEventListener("click", handler, true);

    return () => document.removeEventListener("click", handler, true); // Prevent memory leak or ghost clicks
  }, []);

  const handleOptionClick = (option: DropDownOption) => {
    setIsOpen(false);

    //You might want to prevent re-selecting the currently selected option:
    if (option.value !== value?.value) {
      onChange(option);
    }
  };

  const renderedOptions = options.map((option) => {
    return (
      <div key={option.value} onClick={() => handleOptionClick(option)}>
        {option.label}
      </div>
    );
  });

  const content = isOpen && (
    <Panel className="absolute top-full">{renderedOptions}</Panel>
  );

  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  return (
    <div ref={divElRef} className="w-48 relative">
      <Panel
        onClick={handleClick}
        className="flex justify-between items-center cursor-pointer"
      >
        {value?.label || "Select..."}
        <GoChevronDown className="text-lg" />
      </Panel>
      {content}
    </div>
  );
};

export default DropDown;
