import React from 'react'
import "../css/website.css";
import Img from "../assets/image/60474834660f934090d42877_stamp.png"

const Website = () => {
  return (
    <div className='website_wrapper'>
       <div className="website_text_div">
      <p className="website_transparent_text">WEBSITE </p>
    </div>
       <div className='website_img_div'>
         <img src={Img} alt="img" />
       </div>
    </div>
  )
}

export default Website