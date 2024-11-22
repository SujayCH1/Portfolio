import React, { useState } from "react";
import './project.css';
import fashionFusion from "../../assets/ff.png"
import faceDetector from "../../assets/fld.png"
import spamDetection from "../../assets/sd.png"
import pricingPanel from "../../assets/panel.png"

export const Project = () => {
    const [projects, setProjects] = useState(
        [
            { src: fashionFusion, title: "FashionFusion", code: "https://github.com/SujayCH1/FashionFusion", dem: "https://youtu.be/vuCNzY31WEI", id: 1 },
            { src: faceDetector, title: "Face Livness Detector", code: "https://github.com/SujayCH1/FakeFaceDetector  ", dem: "https://youtu.be/UAdaqm4e5yo" , id : 2},
            { src: pricingPanel, title: "Pricing Panel", code: "https://github.com/SujayCH1/PricingPanel", dem: "https://youtu.be/r5rVKh-RP5I" , id: 3},
            { src: spamDetection, title: "Spam Detector", code: "https://github.com/SujayCH1/SpamDetection", dem: "https://youtu.be/E7ez6g7f8T4", id: 4 }
        ]
    );

    return (
        <div className="projectList">
            {
                projects.map((project) => {
                    return (
                        <div className="project" key={project.id}>
                            <img src={project.src} alt={project.title} />
                            <h3>{project.title}</h3>
                            <a href={project.code}>Code</a>
                            <a href={project.dem}>Demo</a>
                        </div>
                    );
                })
            }
        </div>
    );
}
