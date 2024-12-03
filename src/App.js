import React, { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import PortfolioSection from "./components/PortfolioSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import "./App.css";
import Banner from "./components/Banner";
import TextScroll from "./components/TextScroll";
import NewsPaper from "./components/NewsPaper";
import Website from "./components/Website";
import Upcoming from "./components/Upcoming";
import Award from "./components/Award";
import Testimonial from "./components/Testimonial";
import HeroSection2 from "./components/HeroSection2";
import Perfect from "./components/Perfect";
import Artisan from "./components/Artisan";
import Pixel from "./components/Pixel";
import Drawer from "./components/Drawer";

const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isData, setIsData] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    setTimeout(() => {
      setIsData(true);
    }, 1000);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setIsData(false);
  };

  return ( 
    <div className="App">
      <div className="app_header">
        <Header toggleDrawer={toggleDrawer} />
      </div>

      <Drawer isOpen={isDrawerOpen} closeDrawer={closeDrawer} isData={isData}/>

      <HeroSection />

      <Banner />
      <NewsPaper />
      <Website />
      <Upcoming />
      <Award />
      <Pixel/>
      <Perfect/>
      <Artisan/>
      <Testimonial />
      <HeroSection2 />
      <TextScroll />
      <Footer />
    </div>
  );
};

export default App;
