import React, { useState } from "react";
import type { DropDownOption, DropdownProps } from "../types/DropDown.types";

const DropDown: React.FC<DropdownProps> = ({
  options,
  selection,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClcick = (option: DropDownOption) => {
    setIsOpen(false);

    //what option did the user clicked on
    onSelect(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div key={option.value} onClick={() => handleOptionClcick(option)}>
        {option.label}
      </div>
    );
  });

  const content = isOpen && <div>{renderedOptions}</div>;

  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  return (
    <div>
      <div onClick={handleClick}>{selection?.label || "Select..."}</div>
      {content}
    </div>
  );
};

export default DropDown;
