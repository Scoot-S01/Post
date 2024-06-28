"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  // {
  //   name: "service",
  //   path: "/service",
  // },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "project",
    path: "/project",
  },
];

const Nav = () => {
  // const router = useRouter();
  // const pathname = router.asPath;
  const pathname = usePathname()
  console.log(pathname);
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;