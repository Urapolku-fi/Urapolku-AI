import Chevron from "@/icons/chevron";
import styles from "./Dropdown.module.css";
import { useRef } from "react";

interface DropdownProps {
  onSelect: (index: number) => void;
  options: string[];
}

function Dropdown({ onSelect, options }: DropdownProps) {
  const selectRef = useRef<HTMLSelectElement>(null);

  return (
    <div className={styles.container}>
      <select ref={selectRef} placeholder="Select one" name="name" id="id">
        <option value="value" disabled selected hidden>
          Select one
        </option>
        {options.map((option, index) => (
          <option onClick={() => onSelect(index)} key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <Chevron className={styles.icon} />
    </div>
  );
}

export default Dropdown;
