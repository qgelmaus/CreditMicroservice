import React from "react";
import styles from "./Tag.module.css";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export const Tag = ({ children, className = "" }: TagProps) => {
  return <span className={`${styles.tag} ${className}`}>{children}</span>;
};
