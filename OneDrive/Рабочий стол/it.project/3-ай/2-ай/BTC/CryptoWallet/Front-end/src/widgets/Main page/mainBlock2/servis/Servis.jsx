import React from 'react'
import './Servis.scss'
import img from '/public/img/google logo.png'
import img1 from '/public/img/wecar logo.png'
import img2 from '/public/img/Group.png'
import img3 from '/public/img/nasdaq logo.png'
import img4 from '/public/img/XWC logo.png'
import img5 from '/public/img/Group (1).png'
import img6 from '/public/img/Group (2).png'
import img7 from '/public/img/Ambev_logo logo.png'
import img8 from '/public/img/Group (3).png'

const Servis = () => {
  return (
    <div className='container-block'> 
     <div className='card card1'>
        <a href="https://www.google.com/?hl=ru">
            <div>
       <img src={img} alt="" />
            </div>
        </a>
     </div>
     <div className='card card2'>
        <a href="https://login.yahoo.com/">
            <div>
       <img src={img2} alt="" />
            </div>
        </a>
     </div>
     <div className='card card3'>
        <a href="https://wecar.uk/">
            <div>
       <img src={img1} alt="" />
            </div>
        </a>
     </div>
     <div className='card card4'>
        <a href="https://www.nasdaq.com/">
            <div>
       <img src={img3} alt="" />
            </div>
        </a>
     </div>
     <div className='card card6'>
        <a href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjE2oTuh6qMAxU_T5EFHd3TIbIYABAAGgJscg&co=1&gclid=CjwKCAjw7pO_BhAlEiwA4pMQvCCkbczJMxA5_nJJlFEy928Y9QeVbVKhNRS0X4FMXo2ewhnrv72dGRoC1NEQAvD_BwE&ohost=www.google.com&cid=CAESVuD2fhUwIo8HHb3DTC7xJOVFaWaqPwPoGub0EKgf2FWL9XIpNHxXxtRXvhJ6KuuzRb0sXtB4ETa6SO3vTjbeojHNbIVqdcBLl2xFrblbibA2mACS887q&sig=AOD64_3r_o6w6aFe6YADy-_OAbyn3wl9Rw&q&adurl&ved=2ahUKEwiJ-__th6qMAxVxGBAIHezUKeIQ0Qx6BAgLEAE">
            <div>
       <img src={img5} alt="" />
            </div>
        </a>
     </div>
     <div className='card card5'>
        <a href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiWvcC4jKqMAxVJEKIDHR1FLgoYABAAGgJsZQ&co=1&gclid=CjwKCAjw7pO_BhAlEiwA4pMQvCnP6hYILdlE59BsZortnylr4ff7uoR8O87i501oIhy5BOeaYlz05hoCs1sQAvD_BwE&ohost=www.google.com&cid=CAESVuD250MlpScVyFww2Idx-Trc-wpAqngveuOE1RaKIr5tapiXjXKTBiwBoHt7ZwCH5MIOLN7Zn5JeQq0azXS0pthA368YOSZb74tVUwJZFNcbob2bwclX&sig=AOD64_2D3a7N-nSp5Q90moCtZ8vboKLqgw&q&adurl&ved=2ahUKEwje_rm4jKqMAxXNJRAIHW39AcoQ0Qx6BAgIEAE">
            <div>
       <img src={img4} alt="" />
            </div>
        </a>
     </div>
     <div className='card card7'>
        <a href="https://odsnetwork.in/">
            <div>   
       <img src={img6} alt="" />
            </div>
        </a>
     </div>
     <div className='card card9'>
        <a href="http://ya.ru/">
            <div>
       <img src={img8} alt="" />
            </div>
        </a>
     </div>
     <div className='card card8'>
        <a href="http://amdev.by/">
            <div>
       <img src={img7} alt="" />
            </div>
        </a>
     </div>
    </div>
  )
}

export default Servis