import React from "react";
import ProfilePic from "../Assets/john-deo-image-png";
import {AiFillstar} from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper" >
        <div className="work-section-top" >
          <p className="primary-subheading" >Testimonial</p>
          <h1 className="primary-heading" >
               What TheyAre Saying
          </h1>
           <p className="primary-text" >
               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Ex sunt quidem et error ratione enim veniam aspernatur commodi corporis quasi.
           </p>
        </div>
        <div className="testimonial-section-botton" >
             <img src={ProfilePic} alt="" />
             <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt harum temporibus officia quo nulla sint, soluta sapiente vero.
                Ipsa beatae optio nostrum suscipit quasi ad!
             </p>
             <div className="testimonials-stars-container" >
                <AiFillstar/>
                <AiFillstar/>
                <AiFillstar/>
                <AiFillstar/>
                <AiFillstar/>
             </div>
             <h2> Jhon Doe </h2>
        </div>
    </div>
  )
};

export default Testimonial;