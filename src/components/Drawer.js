import React from "react";
import "./../css/drawer.css";
import Logo from "../assets/image/darkLogo.svg";

const Drawer = ({ isOpen, closeDrawer, isData }) => {
  return (
    <div
      style={{ ...styles.drawer, ...(isOpen ? styles.open : styles.closed) }}
    >
      <div style={styles.content}>
        <div className="drawer_header">
          <p className="drawer_left_para"></p>
          <div className="drawer_logo_div">
            <img src={Logo} alt="logo" />
          </div>
          <div onClick={closeDrawer} className="drawer_right_btn">
            <p></p>
            <p></p>
          </div>
        </div>

        {isData && (
          <div className="drawer_main_div">
            <div className="drawer_inner_div">
              <p></p>
              <p>INDEX</p>
            </div>
            <div className="drawer_inner_div">
              <p></p>
              <p>WORK</p>
            </div>
            <div className="drawer_inner_div">
              <p></p>
              <p>ABOUT</p>
            </div>
          </div>
        )}

{isData && 
        <div className="drawer_footer">
          <div className="drawer_footer_div">
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
        </div> }
      </div>
    </div>
  );
};

const styles = {
  drawer: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    background: "#000",
    transform: "translateY(-100%)", // Hidden state
    transition: "transform 0.5s ease",
    zIndex: 1000,
  },
  open: {
    transform: "translateY(0)", // Visible state
  },
  closed: {
    transform: "translateY(-100%)", // Hidden state
  },
  content: {
    padding: "20px",
  },
};

export default Drawer;
