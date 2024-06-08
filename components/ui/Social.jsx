import React from 'react'
import Link from "next/link"
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa"

const social = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedin />, path: "" },
  { icon: <FaYoutube />, path: "" },
  { icon: <FaInstagram />, path: "" },
]

export const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {social.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  )
}