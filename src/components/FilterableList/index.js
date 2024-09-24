"use client";
import { useState } from "react";

export default function FilterableList({ items }) {
	const [filterText, setFilterText] = useState("");

	const filteredItems = items.filter((item) =>
		item.name.toLowerCase().includes(filterText.toLowerCase())
	);

	return (
		<div>
			<input
				type='text'
				placeholder='Filter...'
				value={filterText}
				onChange={(e) => setFilterText(e.target.value)}
				style={{ padding: "8px", marginBottom: "10px" }}
			/>
			<ul>
				{filteredItems.map((item, index) => (
					<li key={index} style={{ listStyle: "none", padding: "5px 0" }}>
						{item.name}
					</li>
				))}
			</ul>
		</div>
	);
}
