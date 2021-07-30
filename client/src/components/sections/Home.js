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

import Aos from "aos";
import "aos/dist/aos.css";

import { useEffect, useState } from "react";

const Home = (props) => {
    const [username, setUsername] = useState("");
    const [profilePicture, setProfilePicture] = useState("");
    const [topArtists, setTopArtists] = useState([]);
    const [topTracks, setTopTracks] = useState([]);

    useEffect(() => {
        const getUsername = async () => {
            const url =
                process.env.REACT_APP_API_URL +
                "/Username?token=" +
                props.access_token;
            await Axios.get(url)
                .then((resp) => {
                    setUsername(resp.data);
                })
                .catch((error) => {
                    console.error("in fetch username", error);
                });
        };

        const getProfilePicture = async () => {
            const url =
                process.env.REACT_APP_API_URL +
                "/ProfilePicture?token=" +
                props.access_token;
            await Axios.get(url)
                .then((resp) => {
                    setProfilePicture(resp.data);
                })
                .catch((error) => {
                    console.error("in fetch profile pic", error);
                });
        };

        Aos.init({ duration: 1500 });

        getUsername();
        getProfilePicture();
    }, [props.access_token]);

    return (
        <div>
            <Header />
            <IntroSection
                username={username}
                profilePicture={profilePicture}
                mobile={props.mobile}
            />
            <Element name="top-artists-section">
                <TopArtistsSection
                    access_token={props.access_token}
                    setTopArtists={(artists) => {
                        setTopArtists(artists);
                    }}
                    setTopTracks={(tracks) => {
                        setTopTracks(tracks);
                    }}
                    mobile={props.mobile}
                />
            </Element>
            <Element name="generate-playlists-section">
                <GeneratePlaylistsSection
                    access_token={props.access_token}
                    topArtists={topArtists}
                    topTracks={topTracks}
                    userID={username}
                    mobile={props.mobile}
                />
            </Element>
            <Element name="discover-artists-section">
                <DiscoverArtistsSection access_token={props.access_token} />
            </Element>
            <Footer first="about" second="privacy" mobile={props.mobile} />
        </div>
    );
};

export default Home;
