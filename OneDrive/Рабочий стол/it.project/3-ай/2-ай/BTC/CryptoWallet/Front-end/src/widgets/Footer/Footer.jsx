import React from 'react'
import'./Footer.scss'
import img2 from'/public/svg/android.svg'
import img3 from'/public/svg/windows.svg'
import img4 from'/public/svg/Group.svg'
import img5 from'/public/svg/iphone.svg'

const Footer = () => {
  return (
    <div className='nuti'>
    <div className='footer'>
      <div className="fnom1">
       <h1>rovas</h1>
       <div className='hnicon1'>
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
       </div>
       <h2>Никогда не пропускайте обновления</h2>
       <div className='input-container'>
       <input type="Ваш email" placeholder='Ваш e-mail' /> 
       <button>Подписаться</button>
       </div>
       <p>BTCA - это децентрализованная, одноранговая валюта с открытым исходным кодом, отличающаяся расширенными функциями конфиденциальности</p>
      </div>
      <div className="fnom2">
       <h2>BTCA</h2>
       <p>Получить PIV</p>
       <p>Конфиденциальность Shield</p>
       <p>Продвинутый PoS</p>
       <p>Холодный Стекинг</p>
       <p>Мастерноды</p>
       <p>Управление</p>
       <p>Экономика</p>
      </div>
      <div className="fnom3">
      <h2>Ресурсы</h2>
      <p>Кошельки</p>
      <p>Coin Specs</p>
      <p>Обозреватель блоков</p>
      <p>Statistics</p>
      <p>Инфопанель</p>
      <p>Новости</p>
      <p>Дорожная Карта</p>
      </div>
      <div className="fnom4">
      <h2>Поддержка</h2>
      <p>Руководства</p>
      <p>Форум</p>
      <p>Почему BTCA</p>
      <p>Контакты</p>
      </div>
      
    </div>
    </div>
  )
}

export default Footer