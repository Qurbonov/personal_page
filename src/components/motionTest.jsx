"use client";
import React from "react";
import { motion } from "framer-motion";

const MotionTest = () => {
  return (
    <div>
      <motion.div animate={{ x: 100 }}>
        <h1>asdsadas</h1>
      </motion.div>
    </div>
  );
};

export default MotionTest;
