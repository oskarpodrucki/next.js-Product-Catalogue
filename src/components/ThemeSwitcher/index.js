"use client";

import { useState } from "react";

export default function ThemeSwitcher({ onThemeChange }) {
	const [theme, setTheme] = useState("light");

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		onThemeChange(newTheme);
	};

	return (
		<button
			onClick={toggleTheme}
			style={{
				padding: "10px",
				backgroundColor: "#0070f3",
				color: "#fff",
				border: "none",
				cursor: "pointer",
				margin: "10px 0",
			}}>
			Switch to {theme === "light" ? "dark" : "light"} theme
		</button>
	);
}
