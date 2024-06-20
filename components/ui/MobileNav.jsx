"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

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
		name: "about",
		path: "/about",
	},
	{
		name: "blog",
		path: "/blog",
	},
];

const MobileNav = () => {
	const pathName = usePathname();
	return (
		<Sheet>
			<SheetTrigger className="flex justify-center items-center">
				<CiMenuFries className="text-[32px] text-accent" />
			</SheetTrigger>
			<SheetContent className="flex flex-col">
				{/* logo */}
				<div className="mt-32 mb-40 text-center text-2xl">
					<Link href="/">
						<h1 className="text-4xl font-semibold">
							Py<span className="text-accent">Ade</span>
						</h1>
					</Link>
				</div>
				<nav className="flex flex-col justify-center items-center gap-8">
					{links.map((link, index) => {
						return (
							<Link
								href={link.path}
								key={index}
								className={`text-xl capitalize hover:text-accent transition-all ${
									link.path === pathName
										? "text-accent border-b-2 border-orange-800"
										: ""
								}`}
							>
								{link.name}
							</Link>
						);
					})}
				</nav>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
