import React from "react";
import Axios from "axios";
import "./Home.css";

import Header from "../Header";
import TopArtistsSection from "./TopArtistsSection";
import IntroSection from "./IntroSection";
import Footer from "../Footer";

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
            <Header />
            <IntroSection username={username} profilePicture={profilePicture} />
            <TopArtistsSection />
            <Footer first="about" second="privacy" />
        </div>
    );
};

export default Home;
