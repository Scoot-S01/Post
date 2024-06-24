/** @format */
"use client";
import { FaHtml5, FaCss3, FaJs, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";

const aboutme = {
  title: "About me",
  description: "-",
  info: [
    {
      fieldName: "Name",
      fieldValue: "PyAde",
    },
    {
      fieldName: "Email",
      fieldValue: "adeliokrisna529@gmail.com",
    },
    {
      fieldName: "Work",
      fieldValue: "Student",
    },
  ],
};

const experience = {
  icon: "",
  title: "Experience",
  description: "Your experience details go here.",
  items: [
    {
      company: "",
      posisition: "",
    },
  ],
};
const education = {
  icon: "",
  title: "Experience",
  description: "Your experience details go here.",
  items: [
    {
      company: "",
      posisition: "",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: "",
  skillslist: [
    {
      icon: <FaHtml5 />,
      name: "html5",
    },
    {
      icon: <FaCss3 />,
      name: "css3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaNodeJs />,
      name: "nodejs",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwindcss",
    },
  ],
};

export const about = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.5,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0">
            <TabsTrigger value="skills" style={{ marginBottom: "20px" }}>
              Skills
            </TabsTrigger>
            <TabsTrigger value="aboutme" style={{ marginBottom: "20px" }}>
              AboutMe
            </TabsTrigger>
          </TabsList>




          {/* Value Button */}
          <div className="min-h-[70px] w-full">
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
              </div>
            </TabsContent>
            <TabsContent value="aboutme" className="w-full">
              About me
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default about;
