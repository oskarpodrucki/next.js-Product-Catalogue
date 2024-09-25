import FilterableList from "@/components/FilterableList";
import Header from "@/components/Header";
import styles from "@/styles/ListPages.module.css";

const products = [
	{ name: "Laptop" },
	{ name: "Smartphone" },
	{ name: "Headphones" },
	{ name: "Smartwatch" },
	{ name: "Monitor" },
	{ name: "Gaming Console" },
	{ name: "Wireless Keyboard" },
];

export default function Products() {
	return (
		<div className={styles.container}>
			<Header title='Services and Products' />
			<h1 className={styles.title}>Our Products</h1>
			<FilterableList items={products} />
		</div>
	);
}
