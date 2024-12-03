import React from 'react'
import "./../css/upcomingcard2.css";

const Card2 = ({heading, para, footer}) => {
  return (
    <div className='upcoming_card2_wrapper'>
        <div>
       <p className='upcoming_card2_heading'>{heading}</p>
       <p className='upcoming_card2_para'> {para} </p>
       </div>
       <p className='upcoming_card2_footer'><strong>TIPS!</strong> {footer}</p>
    </div>
  )
}

export default Card2