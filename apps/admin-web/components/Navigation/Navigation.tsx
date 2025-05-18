"use client";

import React from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";
import { usePathname } from "next/navigation";

interface NavLink {
  href: string;
  label: string;
}

interface NavigationProps {
  links: NavLink[];
}

export const Navigation = ({ links }: NavigationProps) => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`${styles.link} ${pathname === link.href ? styles.active : ""}`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};
