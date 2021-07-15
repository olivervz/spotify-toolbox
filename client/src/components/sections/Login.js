import React from "react";
import "./Login.css";
import queryString from "query-string";
import { useEffect } from "react";
import Axios from "axios";
require("dotenv").config();

const Login = (props) => {
    useEffect(() => {
        const getAccessToken = async (code) => {
            const url =
                process.env.REACT_APP_API_URL + "/Authorization?code=" + code;
            const response = await Axios.get(url);
            if (response.data.error) {
                console.error(response.data.error, response.error_description);
                return null;
            } else {
                const token = response.data.access_token;
                if (token) {
                    props.updateToken(token);
                }
            }
        };

        // Check For Callback
        if (window.location.href.search("callback") !== -1) {
            const code = window.location.href.substring(
                window.location.href.search("code=") + 5,
                window.location.href.length
            );
            getAccessToken(code);
        }
    });

    const getAuthorizationCode = () => {
        const scope =
            "user-read-private user-read-email playlist-modify-public playlist-modify-private ugc-image-upload user-top-read";
        const url =
            "https://accounts.spotify.com/authorize?" +
            queryString.stringify({
                response_type: "code",
                client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
                scope: scope,
                redirect_uri: process.env.REACT_APP_REDIRECT_URI,
            });
        window.location.href = url;
    };
    return (
        <div className="login-container">
            {!props.callback ? (
                <div>
                    <h1 className="login-title">Spotify Toolbox</h1>
                    <div className="login-button-container">
                        <div
                            className="login-button"
                            onClick={getAuthorizationCode}
                        >
                            <h2 className="login-button-text">
                                Log in with Spotify.
                            </h2>
                        </div>
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default Login;
