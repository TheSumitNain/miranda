import React from 'react'
import "./../css/upcomingcard.css";

const UpcomingCard = ({Img, heading, isNew, para}) => {
  return (
    <div className='upcoming_card_wrapper'>
       <div className='upcoming_card_img_div'>
         <img src={Img} alt='img' />
       </div>
       <p className='upcoming_card_heading'> {heading} {isNew && <span>New</span>} </p>
       <p className='upcoming_card_para'>{para}</p>
    </div>
  )
}

export default UpcomingCard;