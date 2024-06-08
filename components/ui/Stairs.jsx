import { animate, motion } from "framer-motion";

const stairAnimation = {
  initial: {
    left: "0%",
  },
  animate: {
    left: "100%",
  },
  exit: {
    left: ["-100%", "0%"]
  },
};

const reverseIndex = (index) => {
  const totalSteps = 1;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* render  animasi motion div*/}
      {[...Array(1)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="w-full h-full bg-orange-600 relative"
        />
      ))}
    </>
  );
};

export default Stairs;