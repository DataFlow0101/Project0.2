import { useState } from "react";
import "./ProofBlock4.scss"; 

const ProofBlock4 = () => {
  const [activeButton, setActiveButton] = useState("");

  return (
    <div className="info-divcontainer">
    <div className="info-container">
      <div className="button-group">
        <button 
          className="btn btn-blue" 
          onClick={() => setActiveButton("btn1")}
          >
          Финансы
        </button>
        <button 
          className="btn btn-green" 
          onClick={() => setActiveButton("btn2")}
          >
          Начало
        </button>
        <button 
          className="btn btn-red" 
          onClick={() => setActiveButton("btn3")}
          >
          Лицензии
        </button>
      </div>

      <div className="info-box">

        <div className={`info ${activeButton === "btn1" ? "active" : "hidden"}`}>
           <div className="info-text">
            <p>Что такое Proof of Stake?</p>
            <p>В чем преимущества PoS перед PoW?</p>
            <p>Что такое стекинг?</p>
            <p>Как работает стекинг?</p>
            <div>
              <p>Когда у пользователя есть хотя бы 1 PIV в полностью 
                синхронизированном основном <br /> кошельке PIVX, этому узлу
                 разрешается участвовать в сети с соответствующей суммой <br /> стекинга.
                  PIVX использует расширенный алгоритм Proof of Stake, который 
                  эффективно <br /> защищает сеть от злоумышленников. Это позволяет
                   владельцам PIVX получать <br /> вознаграждение за блок, просто помогая защитить сеть.
                    </p>
            </div>
            <p>Как с помощью Proof of Stake я могу получить PIV в качестве вознаграждения?</p>
           </div>
        </div>
        <div className={`info ${activeButton === "btn2" ? "active" : "hidden"}`}>
          <p>hdsjkfl</p>
        </div>
        <div className={`info ${activeButton === "btn3" ? "active" : "hidden"}`}>
         <p>hwejkflew</p>
        </div>
      </div>
    </div>
          </div>
  );
};

export default ProofBlock4;
