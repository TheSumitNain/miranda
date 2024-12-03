import React from 'react'
import "./../css/card2.css";

const Card2 = ({heading, para, footer}) => {
  return (
    <div className='card2_wrapper'>
        <div>
       <p className='card2_heading'>{heading} </p>
       <p className='card2_para'> {para} </p>
       </div>
       <p className='card2_footer'><strong>TIPS!</strong> {footer}</p>
    </div>
  )
}

export default Card2