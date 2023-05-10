import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "DeusUi",
	description: "Libreria de componentes con tailwind",
};

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
