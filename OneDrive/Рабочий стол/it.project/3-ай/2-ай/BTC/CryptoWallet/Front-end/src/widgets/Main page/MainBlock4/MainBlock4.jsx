import React from 'react'
import './MainBlock4.scss'
import image1 from "/public/img/image1.png";
import image2 from "/public/img/image2.png";
import image3 from "/public/img/image3.png";
import banner1 from "/public/img/banner1.png"

import Email from './email/Email';
function MainBlock4() {


  return (
    <div className='bagraunt-div'>
    <div className="mainBlock">
      <img src={banner1} alt="" />
      <h1>Готовы начать?</h1>
      <h6>Независимо от того, являетесь ли вы разработчиком, мерчантом, конечным пользователем или покупателем окон, мы приветствуем вас в сообществе BTCA.</h6>

     <div className="caaard">
      <div className="caard container">
       <p>1 шаг</p>
       <div className='caard2'>
       <h2>Скачайте <br />приложение    <button>Перейти</button></h2>
       <img src={image1} alt="" />
    
       </div>
      </div>
      <div className="caard container">
       <p>2 шаг</p>

       <div className='caard3'>
       <h2>Регестрируйтесь   <button>Перейти</button></h2>
       <img src={image2} alt="" />
    
       </div>
      </div>
      <div className="caard container">
       <p>3 шаг</p>

       <div className='caard4'>
       <h2>Пользуйтесь  <button>Перейти</button></h2>
       <img src={image3} alt="" />
    
       </div>
      </div>
      </div>
      <Email/>
      </div>
    </div>

   
  )
}

export default MainBlock4
