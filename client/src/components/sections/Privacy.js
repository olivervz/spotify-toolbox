import React from "react";
import "./Privacy.css";
import Footer from "../Footer";

const Privacy = () => {
    return (
        <div className="privacy-container">
            <h1 className="privacy-title">Privacy</h1>
            <Footer first="login" second="about" />
        </div>
    );
};

export default Privacy;
