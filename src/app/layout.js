import "@/styles/globals.css"

export const metadata = {
	title: "product-catalouge",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
