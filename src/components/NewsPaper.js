import React from 'react';
import "./../css/newspaper.css";
import Img from "../assets/image/face.jpeg";
import SideFace from "./../assets/image/sideface.jpeg";

const NewsPaper = () => {
  return (
    <div className='news_wrapper'>
      <div className='news_left_div'>
        <p className='news_left_heading'>
            INTERACTIVE
        </p>
        <p className='news_left_heading2'>ARTIST!</p>
        <div className='news_left_img_div'>
            <img src={SideFace} alt='img' />
        </div>
        <p className='news_left_para'>
      <span className="drop-cap">A</span>
      s a multidisciplinary freelancer, I'm passionate about creating iconic digital experiences through motion, typography, and creative coding for companies and agencies around the world.
    </p>
      </div>
       <div className='news_certical_line'></div>
      <div className='news_right_div'>
        <div className='news_right_img_div'>
          <img src={Img} alt='img' /> 
        </div>
        <p className='news_right_para'>
            DIGITAL ART DIRECTOR INTERACTIVE DESIGNER CREATIVE DEVELOPER BASED IN AMSTERDAM, NL.
        </p>
      </div>
    </div>
  )
}

export default NewsPaper