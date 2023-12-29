import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper" >
        <h1 className="primary-hading" > Have In Mind? </h1>
        <h1 className="primary-hading"> Let Us Help You </h1> 
        <div className="contact-form-container" >
        <imput type="text" placeholder="yourmail@gmail.com" />          
        <button className="secondary-button" >submit</button>
      </div>         
    </div>
  )
};

export default Contact;