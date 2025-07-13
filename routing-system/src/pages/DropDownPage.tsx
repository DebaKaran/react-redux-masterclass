import DropDown from "../components/DropDown";
import { colorOptions } from "../data/dropdownOptions";

const DropDownPage = () => {
  return (
    <>
      <DropDown options={colorOptions} />
    </>
  );
};

export default DropDownPage;
