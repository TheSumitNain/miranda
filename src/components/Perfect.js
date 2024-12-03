import React from 'react'
import "./../css/perfect.css";
import Img from "../assets/image/pixelprize.jpeg"

const Perfect = () => {
  return (
    <div className='perfect_wrapper'>
        <div className='perfect_img_div'>
         <img src={Img} alt="img" />
       </div>
    <div className="perfect_text_div">
      <p className="perfect_transparent_text">PERFECT </p>
    </div>
       
    </div>
  )
}

export default Perfect