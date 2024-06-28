/** @format */

"use client";

import React, { useState } from "react";

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub, BsArrowBarRight} from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Pole",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    stack: [
      {
        name: "html 5",
      },
      {
        name: "css 3",
      },
      {
        name: "javascript",
      },
    ],
    image: "/assets/work/pole.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "frontend",
    title: "Pole",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    stack: [
      {
        name: "html 5",
      },
      {
        name: "css 3",
      },
    ],
    image: "/assets/work/linktree.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "UI",
    title: "Penjualan Drone",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    stack: [
      {
        name: "Figma",
      },
    ],
    image: "/assets/work/linktree.png",
    live: "",
    github: "",
  },
];

const Project = () => {
  const [project, setProject] = useState(projects[0]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            {/* number */}
            <div className="text-8xl leading-none font-extrabold">
              {project.num}
            </div>
            {/* category project */}
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
              {project.category} Project
            </h2>
            {/* description */}
            <p className="text-white/50">{project.description}</p>
            <ul className="flex gap-4">
              {project.stack.map((item, index) => {
                return (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                );
              })}
            </ul>
            {/* border */}
            <div className="border border-white/30"></div>
            {/* button */}
            <div>
              <Link href={project.github}>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <BsArrowBarRight/>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Live Project</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              </Link>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">slider</div>
        </div>
      </div>
    </motion.section>
  );
};

export default Project;
