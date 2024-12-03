import React from 'react'
import "./../css/card.css";

const Card = ({Img, heading, isNew, para}) => {
  return (
    <div className='card_wrapper'>
       <div className='card_img_div'>
         <img src={Img} alt='img' />
       </div>
       <div className='card_heading_div'>
       <p className='card_heading'> {heading} </p> {isNew && <span>NEW</span>}
       </div>
       <p className='card_para'>{para}</p>
    </div>
  )
}

export default Card