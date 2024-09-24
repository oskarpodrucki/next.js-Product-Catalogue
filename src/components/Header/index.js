"use client";

import Link from "next/link";
import styles from "@/styles/Header.module.css";

export default function Header() {
	return (
		<header className={styles.header}>
			<nav>
				<ul className={styles.navList}>
					<li>
						<Link href='/'>Home</Link>
					</li>
					<li>
						<Link href='/Contact'>Contact</Link>
					</li>
					<li>
						<Link href='/Products'>Products</Link>
					</li>
					<li>
						<Link href='/Services'>Services</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
