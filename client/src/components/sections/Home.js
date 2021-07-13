import React from "react";
import Axios from "axios";
import { useEffect, useState } from "react";

const Home = (props) => {
    const [username, setUsername] = useState("");
    const [profilePicture, setProfilePicture] = useState("");

    useEffect(async () => {
        const getUsername = async () => {
            const url =
                process.env.REACT_APP_API_URL +
                "/Username?token=" +
                props.access_token;
            const response = Axios.get(url);
            return response;
        };

        const getProfilePicture = async () => {
            const url =
                process.env.REACT_APP_API_URL +
                "/ProfilePicture?token=" +
                props.access_token;
            const response = Axios.get(url);
            return response;
        };

        const username = await getUsername();
        setUsername(username.data);

        const profilePicture = await getProfilePicture();
        setProfilePicture(profilePicture.data);
    }, []);

    return (
        <div>
            <h1>Hello {username}</h1>
            <img src={profilePicture}></img>
        </div>
    );
};

export default Home;
