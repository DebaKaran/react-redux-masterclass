import { useState } from "react";
import DropDown from "../components/DropDown";
import { colorOptions } from "../data/dropdownOptions";
import type { DropDownOption, SelectedOption } from "../types/DropDown.types";

const DropDownPage = () => {
  const [value, setValue] = useState<SelectedOption>(null);

  const handleSelection = (option: DropDownOption) => {
    setValue(option);
  };

  return (
    <div className="flex">
      <DropDown
        options={colorOptions}
        value={value}
        onChange={handleSelection}
      />
    </div>
  );
};

export default DropDownPage;
