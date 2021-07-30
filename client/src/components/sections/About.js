import React from "react";
import "./About.css";
import Footer from "../Footer";

const About = (props) => {
    return (
        <div className="about-container">
            <h1 className="about-title">About</h1>
            <div className="about-text-container">
                <p className="about-text">
                    This is a website built using the Spotify API. This app
                    offers user's the ability to view their top tracks and
                    artists over the past 4 weeks, 6 months, and since they
                    created their account. User's are also able to generate
                    random playlists filled with tracks based on their recent
                    listening tastes. If a user generates a playlist they like,
                    they are able to download it directly to their Spotify
                    account.
                </p>
            </div>
            <Footer mobile={props.mobile} first="login" second="privacy" />
        </div>
    );
};

export default About;
