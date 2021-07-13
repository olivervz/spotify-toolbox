import React from "react";
import "./About.css";
import Footer from "../Footer";

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">About</h1>
            <div className="about-text-container">
                <p className="about-text">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem.
                </p>
            </div>
            "
            <Footer first="login" second="privacy" />
        </div>
    );
};

export default About;
