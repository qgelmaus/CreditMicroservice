import React from "react";
import styles from "./Section.module.css";

interface SectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ title, children, className = "" }: SectionProps) => {
  return (
    <section className={`${styles.section} ${className}`}>
      {title && <h2 className={styles.heading}>{title}</h2>}
      {children}
    </section>
  );
};
