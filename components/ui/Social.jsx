import React from 'react'
import Link from "next/link"
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa"

const social = [
  { icon: <FaGithub />, path: "https://github.com/PyAde" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/putu-adelio-317094290/" },
  { icon: <FaYoutube />, path: "" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/putudodo_1/" },
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