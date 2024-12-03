import React from 'react'
import "./../css/pixel.css";
import MainImg from "../assets/image/pixelmain.jpeg";
import Img from "../assets/image/pixelside.jpeg";

const Pixel = () => {
  return (
    <div className='pixel_wrapper'>
        <div className='pixel_left_div'>
            <div className='pixel_left_top_div'>
                <div className='pixel_left_top_img_div'>
                    <img src={Img} alt='img'/>
                </div>
                <p className='pixel_left_top_text'>THE</p>
            </div>
            <p>PIXEL</p>
        </div> 
        <div className='pixel_right_img_div'>
            <img src={MainImg} alt='img' />
        </div>
    </div>
  )
}

export default Pixel