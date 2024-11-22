import React from "react";
import './contact.css';

export const Contact = () => {
    return (
        <div className="contact-section">
            <div>
                <h2>Contact Me</h2>
                <p className="intro">
                    Reach out for collaborations, opportunities, or questions. I look forward to connecting!
                </p>
            </div>
            <div className="contact-links">
                <a href="mailto:suju.narayan@gmail.com  " className="contact-item">
                    ✉️ Email
                </a>
                <a 
                    href="https://github.com/SujayCH1" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-item"
                >
                    👨‍💻 GitHub
                </a>
                <a 
                    href="https://www.linkedin.com/in/sujay-chanageri-163788286/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-item"
                >
                    💼 LinkedIn
                </a>
            </div>
        </div>
    );
};
