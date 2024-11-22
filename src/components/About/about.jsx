import React from "react";
import myself from "../../assets/myself.png"; 
import "./about.css";

export const About = () => {
    return (
        <div className="aboutSec"> 
            <div className="content">
                <p>
                    I'm a Python developer passionate about creating meaningful technology solutions. 
                    My technical journey explores web development with Django and machine learning 
                    using scikit-learn and TensorFlow. While still growing in my craft, I approach 
                    each project with curiosity and a drive to solve real-world challenges. 
                    I'm continuously learning, translating complex technical concepts into practical 
                    applications that can make a difference.
                </p>
            </div>
            <div className="image"> 
                <img src={myself} alt="Myself" />
            </div>
        </div>
    );
};