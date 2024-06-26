import { Mukta } from "next/font/google";
import "./globals.css";
// Componets
import Header from "@/components/ui/Header";
import PageTransisi from "@/components/ui/PageTransisi";
import Effects from "@/components/ui/Effects";
const JetBrainsMono = Mukta({
	subsets: ["latin"],
	weight: [ "200", "300", "400", "500", "600", "700", "800"],
	variable: "--fontjetbrainsMono",
});

export const metadata = {
	title: "PyAde",
	description: "Portfolio Py Ade",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={JetBrainsMono.variable}>
				<Header />
				<Effects/>
				<PageTransisi>{children}</PageTransisi>
			</body>
		</html>
	);
}
