import React from 'react'
import Servis from './servis/Servis'
import './mainBlock2.scss'

const MainBlock2 = () => {
  return (
    <div className='git'>
    <div className='mainBlock2-container'>
        <div className='text-content'>
            <div className='text'>
            </div>
            <h2>Нас поддерживают</h2>
            <p>Получите свободу, благодаря конфиденциальным,<br />
             глобальным цифровым деньгам. Становитесь своим собственным банком с<br />
              полным контролем над своими цифровыми активами.</p>
        </div>
        <div>
        <Servis/>
        </div>
    </div>
    </div>
  )
}

export default MainBlock2