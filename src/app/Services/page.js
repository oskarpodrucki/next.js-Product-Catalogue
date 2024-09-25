import FilterableList from "@/components/FilterableList";
import Header from "@/components/Header";
import styles from "@/styles/ListPages.module.css";

const services = [
	{ name: "Web Development" },
	{ name: "Mobile App Development" },
	{ name: "UI/UX Design" },
	{ name: "SEO Optimization" },
	{ name: "Cloud Hosting" },
	{ name: "IT Consulting" },
	{ name: "Cybersecurity" },
];

export default function Services() {
	return (
		<div className={styles.container}>
			<Header title='Services and Products' />
			<h1 className={styles.title}>Our Services</h1>
			<FilterableList items={services} />
		</div>
	);
}
