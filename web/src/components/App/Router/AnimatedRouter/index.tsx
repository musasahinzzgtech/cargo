import React from "react";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";

const AnimatedRouter = () => {
  return (
    <motion.div
      initial={{ opacity: 0, transform: "translateY(20px) translateX(20px)" }}
      animate={{
        opacity: 1,
        transform: "translateY(0px) translateX(0)",
        transition: { duration: 0.3 },
      }}
      exit={{ opacity: 0, transform: "translateY(20px) translateX(20px)" }}
    >
      <Outlet />
    </motion.div>
  );
};

export default AnimatedRouter;
