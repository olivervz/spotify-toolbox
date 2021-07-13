import React from "react";
import Axios from "axios";
import Footer from "../Footer";
import "./Home.css";
import { useEffect, useState } from "react";

const Home = (props) => {
    const [username, setUsername] = useState("");
    const [profilePicture, setProfilePicture] = useState("");

    useEffect(() => {
        const getUsername = async () => {
            const url =
                process.env.REACT_APP_API_URL +
                "/Username?token=" +
                props.access_token;
            const response = await Axios.get(url);
            setUsername(response.data);
            return response;
        };

        const getProfilePicture = async () => {
            const url =
                process.env.REACT_APP_API_URL +
                "/ProfilePicture?token=" +
                props.access_token;
            const response = await Axios.get(url);
            setProfilePicture(response.data);
            return response;
        };
        getUsername();
        getProfilePicture();
    }, [props.access_token]);

    return (
        <div>
            <div className="sticky-header-container">
                <h3 className="top-artists">top artists</h3>
                <h3 className="generate-playlists">generate playlists</h3>
                <h3 className="discover-artists">discover-artists</h3>
                <div className="logout-button">
                    <h4 className="logout-button-text">log out</h4>
                </div>
            </div>
            <div className="header-container">
                <h1 className="home-title">Spotify Toolbox</h1>
                {/* <HomeMenu /> */}
            </div>
            <div className="intro-container">
                <img
                    className="profile-picture"
                    src={profilePicture}
                    alt="user"
                ></img>
                <h3 className="one-line">Hello</h3>
                <h2 className="two-line">{username}</h2>
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
                        fill="#25D977"
                    />
                </svg>
            </div>
            <Footer first="about" second="privacy" />
        </div>
    );
};

export default Home;
