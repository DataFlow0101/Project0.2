import React from "react";
import "./mainBlock1.scss";
import Scene from "./3dCompanent/CubeScene";
import img from '/public/img/390 1.png'
import CardBlock1 from "./Card/CardBlock1";
import { motion } from "framer-motion";

const MainBlock1 = () => {
  const textVariants = {
    hidden: {
      opacity: 0,
      x: -100
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const paragraphVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };



  return (
    <div className="bagraunt-img">
    <div className="Block1-container">
      <div className="div-content">
        <div className="content">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 0.2 }}
            >
            Становитесь своим <br /> собственным банком
          </motion.h1>
          
          <motion.p
            initial="hidden"
            animate="visible"
            variants={paragraphVariants}
            >
            Получите свободу, благодаря конфиденциальным, глобальным<br />
            цифровым деньгам. Становитесь своим собственным банком с<br />
            полным контролем над своими цифровыми активами.
          </motion.p>
        </div>
        
        <div className="display">
          <div>
            <div className='btc'>
              <Scene/>
            </div>
            <motion.img 
              src={img} 
              alt="" 
              className="full"
              />
          </div>
        </div>
      </div>
      <CardBlock1/>
    </div>
              </div>
  );
};

export default MainBlock1;