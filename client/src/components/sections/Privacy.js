import React from "react";
import "./Privacy.css";
import Footer from "../Footer";

const Privacy = (props) => {
    return (
        <div className="privacy-container">
            <h1 className="privacy-title">Privacy</h1>
            <div className="privacy-text-container">
                <p className="privacy-text">
                    This website does not save any personal information. Any
                    access to a user's account is done through a generated token
                    that lasts for 5 minutes. The following scopes are used by
                    this app to determine what information can be seen.
                    user-read-recently-played user-top-read
                    playlist-modify-private playlist-modify-public
                    user-read-private. Information about what each scope does
                    can be accessed at
                    https://developer.spotify.com/documentation/general/guides/scopes/.
                    When logging in via Spotify, these scopes are displayed to
                    verify no additional access is allowed.
                </p>
            </div>
            <Footer mobile={props.mobile} first="login" second="about" />
        </div>
    );
};

export default Privacy;
