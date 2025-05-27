"use client";
import React from "react";
import styles from "./TextField.module.css";

interface TextFieldProps {
  label: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  error?: string;
  id?: string;
  required?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  name?: string;
  rows?: number;
}

export const TextArea = ({
  label,
  value,
  onChange,
  placeholder,
  error,
  id,
  required = false,
  disabled = false,
  autoFocus = false,
  name,
  rows = 4,
}: TextFieldProps) => {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={`${styles.wrapper} ${error ? styles.hasError : ""}`}>
      <label htmlFor={inputId} className={styles.label}>
        {label} {required && <span className={styles.required}>*</span>}
      </label>
      <textarea
        id={inputId}
        name={name}
        className={styles.input}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        autoFocus={autoFocus}
        rows={rows}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
      />
      {error && (
        <span id={`${inputId}-error`} className={styles.error}>
          {error}
        </span>
      )}
    </div>
  );
};
