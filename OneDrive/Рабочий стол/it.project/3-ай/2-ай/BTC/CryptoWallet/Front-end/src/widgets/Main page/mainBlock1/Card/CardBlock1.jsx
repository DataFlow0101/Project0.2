import React from 'react';
import './CardBlock1.scss';
import img4 from '/public/img/32259 2.png';
import img5 from '/public/img/32263 1.png';
import img6 from '/public/img/earth_and_pile_of_coins1 1.png';
import { motion } from 'framer-motion';

const CardBlock1 = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className='display-block'>
      <motion.div
        className='card-container'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }} 
        variants={cardVariants}
        transition={{ duration: 0.5 }}
        >
        <div className='card-content'>
          <p>Быстро. Доступно. Безопасно</p>
          <h4>Глобальные транзакции</h4>
          <p>
            An improbable, overnight rise has <br />
            established a new token as a <br />
            blockchain gaming heavyweight.
          </p>
          <button>Перейти и получить</button>
          <div className='imgser'>
            <img src={img6} alt="" />
          </div>
        </div>
      </motion.div>

      <motion.div
        className='card-container'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
        variants={cardVariants}
        transition={{ duration: 0.5, delay: 0.2 }}
        >
        <div className='card-content'>
          <p>Помогите защитить сеть</p>
          <h4>И получите вознаграждение</h4>
          <p>
            An improbable, overnight rise has <br />
            established a new token as a <br />
            blockchain gaming heavyweight.
          </p>
          <button>Перейти и получить</button>
          <div className='imgserd'>
            <img src={img4} alt="" />
          </div>
        </div>
      </motion.div>

      <motion.div
        className='card-container'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
        variants={cardVariants}
        transition={{ duration: 0.5, delay: 0.4 }}
        >
        <div className='card-content'>
          <p>Защитите свои активы с помощью</p>
          <h4>Секретных транзакций</h4>
          <p>
            An improbable, overnight rise has <br />
            established a new token as a <br />
            blockchain gaming heavyweight.
          </p>
          <button>Перейти и получить</button>
          <div className='imgserg'>
            <img src={img5} alt="" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CardBlock1;