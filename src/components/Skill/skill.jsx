import React from "react";
import "./skill.css";
import pythonLogo from '../../assets/python.png';
import jsLogo from '../../assets/js.png';
import tfLogo from '../../assets/tf.png';
import sklLogo from '../../assets/skl.png';
import reactLogo from '../../assets/react.png';
import djLogo from '../../assets/dj.png';
import cvLogo from '../../assets/cv.png';
import psgLogo from '../../assets/psg.png';
import pstLogo from '../../assets/pst.png';
import ghLogo from '../../assets/gh.png';

const SKILLS = [
    { src: pythonLogo, alt: "Python", name: "Python" },
    { src: jsLogo, alt: "JavaScript", name: "JavaScript" },
    { src: tfLogo, alt: "TensorFlow", name: "TensorFlow" },
    { src: sklLogo, alt: "Scikit-learn", name: "Scikit-learn" },
    { src: reactLogo, alt: "React", name: "React" },
    { src: djLogo, alt: "Django", name: "Django" },
    { src: cvLogo, alt: "Computer Vision", name: "Computer Vision" },
    { src: psgLogo, alt: "MySQL", name: "MySQL" },
    { src: pstLogo, alt: "Postman", name: "Postman" },
    { src: ghLogo, alt: "GitHub", name: "GitHub" }
];

export const Skill = () => {
    const skillRows = SKILLS.reduce((rows, skill, idx) => {
        const rowIndex = Math.floor(idx / 5);
        if (!rows[rowIndex]) rows[rowIndex] = [];
        rows[rowIndex].push(
            <div className="skillIcon" key={skill.alt}>
                <div className="iconWrapper">
                    <img src={skill.src} alt={skill.alt} />
                </div>
                <span className="skillName">{skill.name}</span>
            </div>
        );
        return rows;
    }, []);

    return (
        <div className="skillMain">
            <div className="skills">
                {skillRows.map((row, idx) => (
                    <div className="skillRow" key={idx}>
                        {row}
                    </div>
                ))}
            </div>
            <div className="content">
                <h2>Developer Profile</h2>
                <p>Versatile Python developer proficient in full-stack and machine learning technologies. Skilled in web dev with Django and React, experienced in data science and ML using TensorFlow and scikit-learn.</p>
                <div className="highlights">
                    <h3>Key Highlights</h3>
                    <ul>
                        <li><strong>Core Language:</strong> Python</li>
                        <li><strong>Web Frameworks:</strong> Django, React</li>
                        <li><strong>ML Tools:</strong> TensorFlow, scikit-learn</li>
                        <li><strong>Database & API:</strong> PostgreSQL, Postman</li>
                        <li><strong>Version Control:</strong> GitHub</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};