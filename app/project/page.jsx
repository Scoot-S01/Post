/** @format */

"use client";

import { useState } from "react";
import React from "react";

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

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
    description: "",
    stack: [
      {
        name: "html 5",
      },
      {
        name: "css 3",
      },
      {
        name: "javascripts",
      },
    ],
    image: "/assets/work/pole.png",
    live: "",
    github: "",
  },
  {
    num: "01",
    category: "frontend",
    title: "Pole",
    description: "",
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
];

const Project = () => {
  const [project, setProject] = useState(projects[0]);

  return <motion.div>
    <div className="container mx-auto"></div>
  </motion.div>;
};

export default Project;
