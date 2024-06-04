import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import Nav from "../ui/Nav";
const Header = () => {
	return (
		<header className="py-8 xl:py-12 text-white">
			<div className="container mx-auto flex justify-between items-center">
				<Link href="/">
					<h1 className="text-4xl font-semibold">
						Py<span className="text-gray-600">Ade</span>
					</h1>
				</Link>
				{/* Navbar */}
				<div className="hidden xl:flex items-center gap-8">
					<Nav />
					<Link href={"/contact"}>
						<Button>Hire me</Button>
					</Link>
				</div>
				{/* mobile nav */}
				<div className="xl:hidden">Mobile nav</div>
			</div>
		</header>
	);
};

export default Header;
