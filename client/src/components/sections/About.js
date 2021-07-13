import React from "react";
import "./About.css";
import Footer from "../Footer";

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">About</h1>
            <Footer first="login" second="privacy" />
        </div>
    );
};

export default About;
