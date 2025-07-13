import React from "react";

export interface DropDownOption {
  label: string;
  value: string;
}

export interface DropdownProps {
  options: DropDownOption[];
}

const DropDown: React.FC<DropdownProps> = ({ options }) => {
  const renderedOptions = options.map((option) => {
    return <div key={option.value}>{option.label}</div>;
  });
  return (
    <div>
      <div>Select...</div>
      <div>{renderedOptions}</div>
    </div>
  );
};

export default DropDown;
