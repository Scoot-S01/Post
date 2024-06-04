import React from "react";
import Link from "next/link";
import { usePathName } from "next/navigation";

const links = [
	{
		name: "home",
		path: "/",
	},
	{
		name: "service",
		path: "/service",
	},
	{
		name: "contact",
		path: "/contact",
	},
	{
		name: "blog",
		path: "/blog",
	},
];

const Nav = () => {
	const pathname = usePathName();

	return (
		<nav className="flex gap-8">
			{links.map((link, index) => {
				return (
					<Link
						href={link.path}
						key={index}
						className={`${link.path === pathname && "text-accent "}`}
					>
						{link.name}
					</Link>
				);
			})}
		</nav>
	);
};

export default Nav;
