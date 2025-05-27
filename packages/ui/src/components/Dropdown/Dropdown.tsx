import React from "react";
import styles from "./Dropdown.module.css";

interface Option {
  label: string;
  value: string | number;
}

interface DropdownProps {
  label: string;
  options: Option[];
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  id?: string;
  error?: string;
}

export const Dropdown = ({
  label,
  options,
  value,
  onChange,
  id,
  error,
}: DropdownProps) => {
  const selectId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={styles.wrapper}>
      <label htmlFor={selectId} className={styles.label}>
        {label}
      </label>
      <select
        id={selectId}
        className={styles.select}
        value={value}
        onChange={onChange}
      >
        <option value="">-- Vælg --</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};
