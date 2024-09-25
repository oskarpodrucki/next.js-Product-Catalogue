"use client";

import DynamicButton from "@/components/DynamicButton";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Header from "@/components/Header";
import { useState } from "react";
import styles from "@/styles/Home.module.css";

export default function Home() {
	const [theme, setTheme] = useState("light");

	const handleThemeChange = (newTheme) => {
		setTheme(newTheme);
	};

	return (
		<div className={styles.container} data-theme={theme}>
			<Header title='Home Page' />
			<h1 className={styles.title}>Welcome to the Home Page</h1>
			<DynamicButton
				label='Click me'
				onClick={() => alert("Clicked on the home page")}
			/>
			<ThemeSwitcher onThemeChange={handleThemeChange} />
		</div>
	);
}
