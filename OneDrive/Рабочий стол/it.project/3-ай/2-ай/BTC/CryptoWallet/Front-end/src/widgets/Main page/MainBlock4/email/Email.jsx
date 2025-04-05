import React from 'react'
import './Email.scss'
function Email() {
  return (
    <div className='banner'>
    <h1>Никогда не пропускайте обновления</h1>
    <p>Подпишитесь на информационный бюллетень и будьте первым, кто получит новейшие оповещения, объявления и обновления о разработках BTCA.</p>

    <div className='inputt-container'>
       <input type="Ваш email" placeholder='Ваш e-mail' /> 
       <button className='inp2'>Подписаться</button>
       </div>
    </div>
  )
}

export default Email
