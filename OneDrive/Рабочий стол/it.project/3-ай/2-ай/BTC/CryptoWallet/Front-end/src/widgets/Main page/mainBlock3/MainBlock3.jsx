import React from 'react'
import './MainBlock3.scss'
import img from '/public/img/Frame 64.png'
import img1 from '/public/img/Frame 195.png'
import img2 from '/public/img/android logo.png'
import img3 from '/public/img/Vector.png'
import img4 from '/public/img/codicon_terminal-linux.png'
import img5 from '/public/img/bx_bxl-windows.png'
import { motion } from 'framer-motion'

const MainBlock3 = () => {
  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10
      }
    }
  }

  return (
    <div className='div'>
    <div className='mainBlock3-container'>
      <div className='container-content'>
        <div className='content'>
          <h2>Кошелек и <br />Инструменты</h2>
          <p>
            BTCA предоставляет вам инструменты и <br />
            ресурсы, чтобы вы всегда могли <br />
            контролировать свои средства.
          </p>
          <div>
            <div className='div-btn'>
              <button className='btn'><img src={img2} alt="" /></button>
              <button className='btn'><img src={img3} alt="" /></button>
              <button className='btn'><img src={img4} alt="" /></button>
              <button className='btn'><img src={img5} alt="" /></button>
            </div>
            <button className='import-button'>Скачать кошелек</button>
          </div>
        </div>
        
        <div className='images-container'>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ 
              once: true, 
              margin: "0px 0px -100px 0px", 
              amount: 0.8 
            }}
            variants={imageVariants}
            transition={{ delay: 0.2 }}
            >
            <img src={img1} alt="" />
          </motion.div>
          
          <motion.div
            className='img2'
            initial="hidden"
            whileInView="visible"
            viewport={{ 
                once: true,
                margin: "0px 0px -100px 0px",
                amount: 0.8
            }}
            variants={imageVariants}
            transition={{ delay: 0.4 }}
            >
            <img src={img} alt=""/>
          </motion.div>
        </div>
      </div>
    </div>
              </div>
  )
}

export default MainBlock3