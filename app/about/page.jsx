/** @format */
"use client";
import {FaHtml5, FaCss3, FaJs, FaNodeJs} from "react-icons/fa"
import {SiTailwindcss} from "react-icons/si"
import React from "react";
import { icons } from "lucide-react";
const aboutme = {
  title: 'About me',
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
  ]
}



const skills = {
  title: 'My Skills',
  description: '',
  skillslist: [
    {
      icon: <FaHtml5/>,
      name: 'html5',
    },
    {
      icon: <FaCss3/>,
      name: 'css3',
    },
    {
      icon: <FaJs/>,
      name: 'javascripts',
    },
    {
      icon: <FaNodeJs/>,
      name: 'nodejs',
    },
    {
      icon: <SiTailwindcss/>,
      name: 'tailwindcss',
    },
  ]
}




export const about = () => {
  return <div></div>;
};

export default about;
