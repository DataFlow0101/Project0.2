import React from 'react'
import './ProofBlock1.scss'
import img from '/public/img/Frame (2).png'



const ProofBlock1 = () => {
  return (
      <div className='proofBlock1'>
        <div className='containerproofBlock1'>
          <div className='div-blockproff1'>
          <div className='proofcontent1'>
            <h1>Proof of Stake</h1>
            <p>Получайте вознаграждения за безопасность сети BTCA, просто храня монеты в своем кошельке.</p>
          </div>
          <div>
            <img className='imge' src={img} alt="" />
          </div>
        </div>
        <div className='cart-blockproof1'>

        </div>
      
           <div>
            
           </div>
          </div>
</div>
  )
}

export default ProofBlock1