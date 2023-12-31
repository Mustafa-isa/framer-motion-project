import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];
  const varientButton={
    hover:{
    scale:1.1,
    x:[0,-8,8,-8,8,-8,8,0],
      textShadow:"0px 0px 8px rgb(255,255,255)",
      boxSahdow:"0px 0px 8px rgb(255,255,255)"
    }
  }
  return (
    <motion.div className="toppings container"
    

    initial={{
      x:"-100vw",

    }}
    animate={{
      x:0
    }}
    transition={{
      delay:1,
      duration:1,
      type:"spring",
      stiffness:100


    }}
    
    >
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
            
            whileHover={
              {
                scale:1.3,
                originX:0,
                color:"#f8e112"

              }
            }
            >
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
            variants={varientButton}
            whileHover="hover"
      
            
            
      >
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;