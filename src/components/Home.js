import React from "react";
import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import {  FiArrowRight } from "react-icons/fi";

const Home = () => {
  return ( 
  <div className="home-container">
        <Navbar/>        
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
          </div>
          <div className="home-text-section" >
            <hi className="primary-heading">
              Your Favourite Food Delivered Hot & Fresh
            </hi>
            <p className="primary-text">
             Healthy Switcher Chefs Do All The Prop Work, Like Peeding, 
             Chopping
             & Marinating, So You Can Cook A Fresh Food
            </p>
            <button className="secondary-button">
              Order Now <FiArrowRight />
            </button>
         
          </div>
          <div className="home-image-container">
              <img src= {BannerImage} alt="" />
            </div>
       </div>  
  </div>
  );
};

export default Home;