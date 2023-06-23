import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const varientButton={
  hover:{
  scale:1.1,
  x:[0,-8,8,-8,8,-8,8,0],
    textShadow:"0px 0px 8px rgb(255,255,255)",
    boxSahdow:"0px 0px 8px rgb(255,255,255)"
  }
}
const Home = () => {
  const hvarient = {
    hidden: {
      opacity: 0
    },
    visibel: {
      opacity: 1
    },
    transition: {
      delay: 1
    }
  };
  return (
    <motion.div
      className="home container"
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      transition={{
        delay: 1,
        duration: 1.5
      }}
    >
      <motion.h2 variants={hvarient} initial={"hidden"} animate={"visibel"}>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
        variants={varientButton}
        whileHover="hover"
        
        >Create Your Pizza</motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
