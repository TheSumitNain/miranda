import React from "react";
import "./../css/testimonial.css";

import User1 from "../assets/image/user1.jpg";
import User2 from "../assets/image/user2.jpg";
import User3 from "../assets/image/user3.jpg";
import User4 from "../assets/image/user4.jpg";

const Testimonial = () => {
  const data = [
    {
      userName: "SAM DAY",
      userRole: "Creative Director & Designer",
      userOffice: "",
      Avator: User1,
      msg: "Blurring the line between design & dev, Niccola has an unmatched eye for detail and precise execution in his work which pushes the whole industry forward",
    },
    {
      userName: "SOFIA PAPADOPOULOU",
      userRole: "Designer & Art Director",
      userOffice: "",
      Avator: User2,
      msg: "Niccolo's eye for detail & design as well as his impeccable asethetics, make hime one of the leaders in today's digital design scene",
    },
    {
      userName: "BRUNO ARIZIO",
      userRole: "Creative Director at",
      userOffice: "Studio BA",
      Avator: User3,
      msg: "High-skilled designer who creates novel experiences with ease and craft. His signature is more vivid on each new project he launches and this is only the start",
    },
    {
      userName: "ENEA ROSSI",
      userRole: "Co-Founder at",
      userOffice: "Adoratorio",
      Avator: User4,
      msg: "A very promising Creative Director and Interactive Deesigner given his natural asethetic taste and innate instinct for functionality",
    },
  ];

  return (
    <div className="test_wrapper">
      <div className="test_cards">
        {data.map((item) => {
          return (
            <div className="test_card">
              <div className="test_card_inner_div">
                <p>"{item.msg}"</p>
                <div className="test_user_info_div">
                  <div className="test_user_img_div">
                    <img src={item.Avator} alt="img" />
                  </div>
                  <div className="test_user_detail_div">
                    <p>{item.userName}</p>
                    <p>
                      {item.userRole} <span>{item.userOffice}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonial;
