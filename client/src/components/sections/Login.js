import React from "react";
import queryString from "query-string";
import { useEffect, useState } from "react";
import Axios from "axios";
require("dotenv").config();

const Login = (props) => {
    useEffect(async () => {
        const getAccessToken = async (code) => {
            const url =
                process.env.REACT_APP_API_URL + "/Authorization?code=" + code;
            console.log(url);
            const response = await Axios.get(url);
            console.log(response);
            if (response.data.error) {
                console.error(response.data.error, response.error_description);
                return null;
            } else {
                return response.data.access_token;
            }
        };

        // Check For Callback
        if (window.location.href.search("callback") !== -1) {
            const code = window.location.href.substring(
                window.location.href.search("code=") + 5,
                window.location.href.length
            );
            const token = await getAccessToken(code);
            if (token) {
                props.updateToken(token);
            }
        }
    });

    const getAuthorizationCode = () => {
        const scope =
            "user-read-private user-read-email playlist-modify-public playlist-modify-private ugc-image-upload";
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
        <div>
            <div style={{ textAlign: "center" }}>
                <button
                    style={{
                        marginTop: "100px",
                        width: "300px",
                        height: "100px",
                    }}
                    onClick={getAuthorizationCode}
                >
                    {process.env.REACT_APP_TEST_VAR}
                </button>
            </div>
        </div>
    );
};

export default Login;
