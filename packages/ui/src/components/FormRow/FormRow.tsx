import React from "react";
import styles from "./FormRow.module.css";

interface FormRowProps {
  label: string;
  htmlFor?: string;
  children: React.ReactNode;
  error?: string;
}

export const FormRow = ({ label, htmlFor, children, error }: FormRowProps) => {
  return (
    <div className={styles.row}>
      <label htmlFor={htmlFor}>{label}</label>
      {children}
      {error && (
        <span style={{ color: "#c00", fontSize: "0.85rem" }}>{error}</span>
      )}
    </div>
  );
};
