"use client"
import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import Nav from "../ui/Nav";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Py<span className="text-orange-500">Ade&sigma;</span>
          </h1>
        </Link>
        {/* Navbar */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          {/* <Link href={"/contact"}>
            <Button>Hire me</Button>
          </Link> */}
        </div>
        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>

      {/* Horizontal Animation */}
      <motion.div
        className="h-1 overflow-hidden"
        style={{
          background: "linear-gradient(to right, #c2410c, #ea580c, #f97316)",
          width: "200%",
          backgroundSize: "200% 100%",
          backgroundPosition: "0 0",
          transform: "translateX(100%)",
          ':before': {
            content: " ",
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '1px',
            backgroundColor: 'black', /* Adjust color as needed */
            animation: 'animateDottedLine 1s infinite linear',
          },
        }}
        initial={{ transform: "translateX(100%)" }}
        animate={{ transform: "translateX(-100%)" }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </header>
  );
};

export default Header;
