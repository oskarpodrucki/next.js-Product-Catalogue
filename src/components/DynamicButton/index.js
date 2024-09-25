"use client";

export default function DynamicButton({ label, onClick }) {
	return (
		<button
			onClick={onClick}
			style={{
				padding: "10px",
				backgroundColor: "#0070f3",
				color: "#fff",
				border: "none",
				cursor: "pointer",
				margin: "10px 5px",
			}}>
			{label}
		</button>
	);
}
