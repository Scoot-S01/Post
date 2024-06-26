/** @format */
"use client";
import { FaHtml5, FaCss3, FaJs, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiFigma } from "react-icons/si";
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
import { Library } from "lucide-react";

const aboutme = {
  title: "About me",
  description:
    "Hello everyone, this is about me. You can contact or interact with me and can find out more information with me here",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Putu Adelio",
    },
    {
      fieldName: "Email",
      fieldValue: "adeliokrisna529@gmail.com",
    },
    {
      fieldName: "Work",
      fieldValue: "Student",
    },
    {
      fieldName: "Number",
      fieldValue: "(+62) 851-4272-0930",
    },
    {
      fieldName: "Region",
      fieldValue: "Indonesia",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "hello everyone, this is the skill that I have mastered over the past few years",
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
    {
      icon: <SiFigma/>,
      name: "figma"
    }
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
          className="flex flex-col xl:flex-row gap-[60px]" // default 60px
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-4">
            <TabsTrigger value="skills" >
              Skills
            </TabsTrigger>
            <TabsTrigger value="aboutme">
              AboutMe
            </TabsTrigger>
          </TabsList>

          {/* Value Button */}
          <div className="min-h-[70px] w-full">
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillslist.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] 
                            rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/*  */}
            <TabsContent value="aboutme" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{aboutme.title}</h3>
                <p className="max-w-[600px] text-white/50 mx-auto xl:mx-0">{aboutme.description}</p>
                <ul className="grid grid-col-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {aboutme.info.map((items,index)=>{
                    return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/50">{items.fieldName}</span>
                      <span className="text-xl">{items.fieldValue}</span>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default about;
