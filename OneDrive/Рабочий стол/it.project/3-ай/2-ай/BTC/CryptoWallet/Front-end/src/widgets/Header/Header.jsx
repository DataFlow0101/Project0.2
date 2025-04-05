import React, { useState } from "react";
import './Header.scss'
import img from '/public/svg/Frame 192.svg'
import { Link } from "react-router";
import { CiGlobe } from "react-icons/ci";
import { FaCoins } from "react-icons/fa"; 

const Header = () => {

  
  const [balance, setBalance] = useState(10.834); 

  const [language, setLanguage] = useState("RUS");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "RUS" ? "ENG" : "RUS"));
  };
  return (
   <div className="divrt">

    <div className='hnom1'>
      <Link to={'/'}>
    <img src={img} alt="" />
      </Link>
      <ul>
        <Link to={'/ProofofStake'}>
        <li>
          Функции
        </li>
        </Link>
        <li>
          Кошельки
        </li>
        <li>
          Участие
        </li>
        <li>
         Ресурсы
        </li>
        <li>
        Новости
        </li>
        <li>
        O BTCA
        </li>

      </ul>
    <div className="btn">
      <button className="lang-button" onClick={toggleLanguage}>
        <CiGlobe className="icon" />
        {language}
        </button>

        <button className="button">
          <FaCoins className="icon" />
          {balance.toFixed(3)}
      </button>
    </div>
      </div>
     
   </div>
  
  )
}

export default Header