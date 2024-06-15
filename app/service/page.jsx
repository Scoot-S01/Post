"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import React from "react";

const services = [
	{
		num: "01",
		title: "Web Development",
		description: "-",
		href: " ",
	},
	{
		num: "02",
		title: "Web Development",
		description: "-",
		href: " ",
	},
	{
		num: "03",
		title: "Majalah",
		description: "-",
		href: " ",
	},
	{
		num: "04",
		title: "UI/UX",
		description: "-",
		href: " ",
	},
];

import { motion } from "framer-motion";
const Services = () => {
	return (
		<section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-8">
			<div className="container mx auto">
				Service
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1,
					transition: {delay: 2.5, duration: 0.5, ease: "easeIn"}
				}}>
					{services.map((service, index) =>{
						return <div key={index}>
							
						</div>
					})}
				</motion.div>
			</div>
		</section>
	);
};

export default Services;
