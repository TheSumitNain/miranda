import React from 'react'
import "./../css/upcoming.css";
import Card from "./UpcomingCard";
import Card2 from "./UpcomingCard2";
import CardImg from "../assets/image/upcomingCardImg.webp";
import Img from "../assets/image/upcoming.jpeg";
import ArrowImg from "../assets/image/upcomingArrow.svg";

const Upcoming = () => {
    const para1 =
    "Unexpected Time is a classic-furistic gamification web experience showing the lost history & culture in a world dominated by the virtual reality.";
 
  return (
    <div className='upcoming_wrapper'>
       <div className='upcoming_left_div'>
      <div>
      <Card2
          heading={"All WORK!"}
          para="A Featured selection the latest work - of the last years."
          footer={"Drags sideways to navigate"}
        />
                <div className="upcoming_left_vertical_line"></div>
        <Card Img={CardImg} heading="UNEXPECTED TIME" para={para1} />

    </div>
      <div className='upcoming_left_img_div'>
         <img src={Img} alt='img'/>
      </div>
      <div>
       </div>
       </div>
       <div className='upcoming_vertical_line'></div>
       <div className='upcoming_right_div'>
         <div className='upcoming_right_heading_div'>
            <p>THINK, CREATE</p>
            <p>DELIVER</p>
         </div>
         <div className='upcoming_right_para_div'>
            <p> <span>A</span> strong project is created by deep collaboration. I design, develop, and deliver websites that drive result and win awards.</p>
            <p>Like an artisan, L like to start from raw matter and give life to an iconic product that makes your brand stand out, starting from a Visual Strategy that guide the client's vision to reality.</p>
         </div>
         <div className='upcoming_btn_div'>
            <p>
                <div>
                    <img src={ArrowImg} alt='img' />
                </div>
                <span>ALL&nbsp;WORK</span>
            </p>
         </div>
       </div>
    </div>
  )
}

export default Upcoming