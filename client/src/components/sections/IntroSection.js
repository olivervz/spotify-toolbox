import React from "react";
import "./IntroSection.css";

const IntroSection = (props) => {
    const intro = (
        <div className="intro-section-container">
            <div className="intro-container">
                <img
                    className="profile-picture"
                    src={props.profilePicture}
                    alt="user"
                ></img>
                <h3 className="one-line">Hello</h3>
                <h2 className="two-line">{props.username}</h2>
                <h3 className="three-line">Welcome to Spotify Toolbox</h3>
                <h3 className="four-line">
                    Unlock more for your Spotify profile
                </h3>
            </div>
            <div className="arrow-container">
                <svg
                    className="arrow"
                    viewBox="0 0 60 60"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M28.25 0C26.5931 0 25.25 1.34315 25.25 3L25.25 45.6375L6.41633 26.8038C5.24183 25.6293 3.33655 25.6327 2.16621 26.8113L1.10636 27.8787C-0.0581533 29.0515 -0.0548093 30.9452 1.11384 32.1138L26.8787 57.8787C28.0503 59.0503 29.9497 59.0503 31.1213 57.8787L56.8787 32.1213C58.0503 30.9497 58.0503 29.0503 56.8787 27.8787L55.8319 26.8319C54.6611 25.6611 52.7631 25.6602 51.5912 26.83L32.75 45.6375L32.75 3C32.75 1.34315 31.4069 0 29.75 0H28.25Z"
                        fill="#25d977"
                    />
                </svg>
            </div>
        </div>
    );

    const introMobile = (
        <div className="intro-section-container">
            <div className="intro-container">
                <img
                    className="profile-picture"
                    src={props.profilePicture}
                    alt="user"
                ></img>
                <h3 className="one-line">Hello</h3>
                <h2 className="two-line">{props.username}</h2>
                <h3 className="three-line">Welcome to Spotify Toolbox</h3>
                <h3 className="four-line">
                    Unlock more for your Spotify profile
                </h3>
            </div>
            <div className="arrow-container">
                <svg
                    className="arrow"
                    viewBox="0 0 60 60"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M28.25 0C26.5931 0 25.25 1.34315 25.25 3L25.25 45.6375L6.41633 26.8038C5.24183 25.6293 3.33655 25.6327 2.16621 26.8113L1.10636 27.8787C-0.0581533 29.0515 -0.0548093 30.9452 1.11384 32.1138L26.8787 57.8787C28.0503 59.0503 29.9497 59.0503 31.1213 57.8787L56.8787 32.1213C58.0503 30.9497 58.0503 29.0503 56.8787 27.8787L55.8319 26.8319C54.6611 25.6611 52.7631 25.6602 51.5912 26.83L32.75 45.6375L32.75 3C32.75 1.34315 31.4069 0 29.75 0H28.25Z" />
                </svg>
            </div>
        </div>
    );
    if (props.mobile === true) {
        return introMobile;
    } else {
        return intro;
    }
};

export default IntroSection;
