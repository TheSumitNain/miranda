import React from "react";
import "../css/herosection.css";
import Card from "./Card";
import Card2 from "./Card2";
import Img1 from "./../assets/image/c11.jpeg";
import Img2 from "./../assets/image/c12.webp";
import { a } from "@react-spring/web";

const HeroSection = () => {
  const para1 =
    "AvroKO is an award-winning global design firm, established itself as a global leader in interior architecture for hospitality, restaurant and bars";
  const para2 =
    "The Roger Hub is an Immersive web experience showcasing the tennis-inspired 'On' sneakers, a collaboration born out of a partnership with the legendary Roger Federer";

  return (
    <div className="hero_section_wrapper">
      <div className="herosection_inner">
        <Card Img={Img1} heading="AVRO | KO" isNew="true" para={para1} />
        <div className="vertical_line"></div>
        <Card2
          heading={"ALL WORK!"}
          para="A Featured selection the latest work -- of the last years."
          footer={"Drags sidewys to navigate"}
        />
        <div className="vertical_line"></div>
        <Card Img={Img2} heading="THE ROGER HUB" isNew="true" para={para2} />
      </div>
    </div>
  );
};

export default HeroSection;
