import React from 'react'
import "./../css/award.css";

const Award = () => {
  return (
    <div className='award_wrapper'>
      <div className='award_card'>
         <div className='award_text_div'>
            <p>SITE OF THE DAY</p>
            <p>AWARDS</p>
         </div>
         <p>9</p>
      </div>

      <div className='award_card'>
         <div className='award_text_div'>
            <p>SITE OF THE MONTH</p>
            <p>WINNERS</p>
         </div>
         <p>1</p>
      </div>

      <div className='award_card'>
         <div className='award_text_div'>
            <p>FWA OF THE DAY</p>
            <p>AWARDS</p>
         </div>
         <p>6</p>
      </div>

      <div className='award_card'>
         <div className='award_text_div'>
            <p>ACCLAIMED</p>
            <p>MENTIONS</p>
         </div>
         <p>8</p>
      </div>
    </div>
  )
}

export default Award