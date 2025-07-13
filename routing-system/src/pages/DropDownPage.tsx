import { useState } from "react";
import DropDown from "../components/DropDown";
import { colorOptions } from "../data/dropdownOptions";
import type { DropDownOption, SelectedOption } from "../types/DropDown.types";

const DropDownPage = () => {
  const [selection, setSelection] = useState<SelectedOption>(null);

  const handleSelecttion = (option: DropDownOption) => {
    setSelection(option);
  };

  return (
    <>
      <DropDown
        options={colorOptions}
        selection={selection}
        onSelect={handleSelecttion}
      />
    </>
  );
};

export default DropDownPage;
