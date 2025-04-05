import React from 'react'
import './ProofBlock3.scss'
import { BsArrowRightSquare } from "react-icons/bs";

const ProofBlock3 = () => {
  return (
    <div className='bagraunt-colorw100'>
    <div className='proofBlock3-container'>
        <div>
        <h2>Документация</h2>
        <p>Ищете более подробную информацию или <br />
         инструкции? Нет проблем. Мы об этом позаботились.</p>
        </div>
        <div className='div-display'>
        <div className='card3-block'> 
            <h4>BTCA Proof <br />
             of Stake</h4>
             <div>
            <p>Введение в BTCA Proof of Stake</p>
            <a href="">Перейти <BsArrowRightSquare className='icon' /></a>
             </div>
        </div>
        <div className='card3-block'> 
            <h4>Требования  <br />
            к стекингу</h4>
            <div>
            <p>Что вам необходимо для стекинга</p>
            <a href="">Перейти <BsArrowRightSquare className='icon' /></a>
            </div>
        </div>
        <div className='card3-block'> 
            <h4>Требования <br />
             стекинга</h4>
             <div>
            <p>Как запустить стекинг</p>
            <a href="">Перейти <BsArrowRightSquare className='icon'/></a>
             </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default ProofBlock3