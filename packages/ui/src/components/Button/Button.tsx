import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
}

export const Button = ({ children, onClick, type, disabled }: ButtonProps) => {
	return (
		<button className={styles.button} onClick={onClick} type={type} disabled={disabled}>
			{children}
		</button>
	);
};
