"use client";

import Image from "next/image";
import {Button} from "@/components/ui/button"
import {Social} from "@/components/ui/Social"
import {FiDownload} from "react-icons/fi"
import {Photo} from "@/components/ui/Photo"
import { TypewriterComponent } from "@/components/ui/Typewriter";

export default function Home() {
	return (
		<section className="h-full">
			<div className="container mx-auto h-full">
				<div className="flex flex-col xl:flex-row items-center
				justify-between xl:pt-8 xl:pb-24">
					{/* Text */}
					<div className="text-center xl:text-left  xl:order-none">
						{/* <h1 className="h1 mb-2 mt-4">Hello saya <br /><span className="text-accent">Putu Adelio</span></h1> */}
						<TypewriterComponent className = "h1 mb-2 mt-4 text-accent"/>
						<span className="text-xl mb-6 font-semibold"><span className="text-accent">( Fullstack <span className="text-white">Developer</span> )</span></span>
					<p className="max-w-[300px] mb-9 text-white/80">Saya sedang beradaptasi dengan teknologi dan sedang belajar tentang kemajuan teknologi</p>
					<div className="flex flex-col xl:flex-row items-center gap-8">

						<div className="mb-8 xl:mb-0">
							<Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border
							border-accent rounded-full flex justify-center items-center text-accent text-base
							hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
						</div>
					</div>
					</div>
					{/* Gambar */}
					<div className=" xl:order-none mb-8">
						<Photo/>
					</div>
				</div>
			</div>
		</section>
	);
}
