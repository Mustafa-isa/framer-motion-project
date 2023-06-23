import React from 'react';
import { motion } from 'framer-motion';
const Order = ({ pizza }) => {
  const  varient ={
    hidden:{
      x:"-100%"
    },
    visible:{
      x:0,
      transation:{
      
      delay:2,
        type:"spring",
  
        when:"beforeChildren",
        mass:0.4,
        damping:8,
      staggerChildren:2
      }
    }
  }

  const childVarient ={
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1

    }
  }
  return (
    <motion.div className="container order" 
    variants={varient}

    initial="hidden"
    animate="visible"
  
    >
      <h2>Thank you for your order :)</h2>
      <motion.p 
      variants={childVarient}
      initial='hidden'
      animate="visible"
      >You ordered a {pizza.base} pizza with:</motion.p>
      {pizza.toppings.map(topping => <motion.div key={topping}>{topping}</motion.div>)}
    </motion.div>
  )
}

export default Order;