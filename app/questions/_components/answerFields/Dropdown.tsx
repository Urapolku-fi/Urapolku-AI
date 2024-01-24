"use client";
import Chevron from "@/icons/chevron";
import styles from "./Dropdown.module.css";
import { MouseEvent, useRef } from "react";

interface DropdownProps {
  onSelect: (index: number) => void;
  options: string[];
}

function Dropdown({ onSelect, options }: DropdownProps) {
  const selectRef = useRef<HTMLSelectElement>(null);

  const onClick = (e: MouseEvent<HTMLOptionElement>, index: number) => {
    e.preventDefault();
    onSelect(index);
  };

  return (
    <div className={styles.container}>
      <select
        ref={selectRef}
        defaultValue="value"
        placeholder="Select one"
        name="name"
        id="id"
      >
        <option value="value" hidden>
          Select one
        </option>
        {options.map((option, index) => (
          <option onClick={(e) => onClick(e, index)} key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <Chevron className={styles.icon} />
    </div>
  );
}

export default Dropdown;
