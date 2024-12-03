import React from "react";
import "../css/herosection.css";
import Card from "./Card";
import Card2 from "./Card2";
import Img1 from "./../assets/image/c11.jpeg";
import Img2 from "./../assets/image/wow.webp";
import { a } from "@react-spring/web";

const HeroSection2 = () => {
  const para1 =
    "AvroKO is an award-winning global design firm, established itself as a global leader in interior architecture for hospitality, restaurant and bars";
  const para2 = "WOW Concept is a the world's first concept store based in Madrid revolutionizing retail with a dynamic & interactive shopping experience.";

  return (
    <div className="hero_section_wrapper">
      <div className="herosection_inner">
      <Card Img={Img2} heading="WOW CONCEPT" isNew="true" para={para2} />
      <div className="vertical_line"></div>
        <Card2
          heading={"All WORK!"}
          para="A Featured selection the latest work - of the last years."
          footer={"Drags sidesways to navigate"}
        />
        <div className="vertical_line"></div>
        <Card Img={Img1} heading="AVRO | KO" isNew="true" para={para1} />
      </div>
    </div>
  );
};

export default HeroSection2;
