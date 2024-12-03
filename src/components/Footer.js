import React from "react";
import "./../css/footer.css";
import Img from "../assets/image/footerImg.png";

const Footer = () => {
  return (
    <div className="footer_wrapper">
      <div className="footer_left_div">
        <p>MIRANDA&copy;</p>
        <div className="footer_img_div">
          <img src={Img} alt="img" />
        </div>
        <a href="/">
          <p>Legel</p>
        </a>
      </div>
      <div className="footer_right_div">
        <ul>
          <li>
            <a href="/">Twitter</a>
          </li>
          <p></p>
          <li>
            <a href="/">Instagram</a>
          </li>
          <p></p>
          <li>
            <a href="/">Dribbble</a>
          </li>
          <p></p>
          <li>
            <a href="/">Behance</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
