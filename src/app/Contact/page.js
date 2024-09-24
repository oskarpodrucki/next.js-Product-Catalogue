"use client";

import DynamicButton from "@/components/DynamicButton";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Header from "@/components/Header";
import { useState } from "react";
import styles from "@/styles/Contact.module.css";

export default function Contact() {
	const [theme, setTheme] = useState("light");

	const handleThemeChange = (newTheme) => {
		setTheme(newTheme);
	};

	return (
		<div className={styles.container} data-theme={theme}>
			<Header title='Contact Page' />
			<h1 className={styles.title}>Contact Us</h1>
			<DynamicButton
				label='Click me'
				onClick={() => console.log("Clicked on the contact page")}
			/>
			<ThemeSwitcher onThemeChange={handleThemeChange} />
		</div>
	);
}
