import React from "react";
import Axios from "axios";
import "./Home.css";
import { Element } from "react-scroll";

import Header from "../Header";
import TopArtistsSection from "./TopArtistsSection";
import GeneratePlaylistsSection from "./GeneratePlaylistsSection";
import DiscoverArtistsSection from "./DiscoverArtistsSection";
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

    const linkTopArtists = () => {};
    const linkDiscoverArtists = () => {};
    const linkGeneratePlaylists = () => {};
    const logout = () => {};

    return (
        <div>
            <Header
                linkTopArtists={linkTopArtists}
                linkDiscoverArtists={linkDiscoverArtists}
                linkGeneratePlaylists={linkGeneratePlaylists}
                logout={logout}
            />
            <IntroSection username={username} profilePicture={profilePicture} />
            <Element name="top-artists-section">
                <TopArtistsSection />
            </Element>
            <Element name="generate-playlists-section">
                <GeneratePlaylistsSection />
            </Element>
            <Element name="discover-artists-section">
                <DiscoverArtistsSection />
            </Element>
            <Footer first="about" second="privacy" />
        </div>
    );
};

export default Home;
