import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* Gambar */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute"
          style={{ borderRadius: "50%", overflow: "hidden", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        >
          <Image
            src="/assets/photo1.png"
            layout="fill"
            objectFit="cover"
            priority
            quality={100}
            alt=""
            className="object-contain"
          />
        </motion.div>
        {/* circle */}
        <motion.svg
          className="w-[300px] xl:w-[540px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#b45309"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "150 300" }}
            animate={{
              strokeDasharray: ["300"],
              rotate: [0, 360],
            }}
            transition={{
              duration: 0,
              repeat: Infinity,
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};