export interface DropDownOption {
  label: string;
  value: string;
}

export interface DropdownProps {
  options: DropDownOption[];
  selection: SelectedOption;
  onSelect: (option: DropDownOption) => void;
}

export type SelectedOption = DropDownOption | null;
