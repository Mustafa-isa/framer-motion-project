import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];
  const varientButton={
    hover:{
    scale:1.1,
    x:[0,-8,8,-8,8,-8,8,0],
      textShadow:"0px 0px 8px rgb(255,255,255)",
      boxSahdow:"0px 0px 8px rgb(255,255,255)"
    }
  }
  return (
    <motion.div className="base container"
    
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

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
            whileHover={
              {
                scale:1.1,
                originX:0,
                color:"#f8e112"

              }
            }
            >
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
        initial={{
          x:"-100vw",
    
        }}
        animate={{
          x:0
        }}
        transition={{
      
          duration:1,
          type:"spring",
          stiffness:100
          
    
        }}
        
        >
          <Link to="/toppings">
            <motion.button
              variants={varientButton}
              whileHover="hover"
            
            >Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;