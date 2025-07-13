export interface DropDownOption {
  label: string;
  value: string;
}

export interface DropdownProps {
  options: DropDownOption[];
  value: SelectedOption;
  onChange: (option: DropDownOption) => void;
}

export type SelectedOption = DropDownOption | null;
