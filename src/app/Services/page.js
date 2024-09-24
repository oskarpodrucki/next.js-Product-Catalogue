import FilterableList from "@/components/FilterableList";
import Header from "@/components/Header";

const services = [
	{ name: "Service 1" },
	{ name: "Service 2" },
	{ name: "Service 3" },
];

export default function Services() {
	return (
		<div>
			<Header title='Services' />
			<h1>Our Services</h1>
			<FilterableList items={services} />
		</div>
	);
}
