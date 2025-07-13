import React, { useState } from "react";

export interface DropDownOption {
  label: string;
  value: string;
}

export interface DropdownProps {
  options: DropDownOption[];
}

const DropDown: React.FC<DropdownProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderedOptions = options.map((option) => {
    return <div key={option.value}>{option.label}</div>;
  });

  const content = isOpen && <div>{renderedOptions}</div>;

  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  return (
    <div>
      <div onClick={handleClick}>Select...</div>
      {content}
    </div>
  );
};

export default DropDown;
