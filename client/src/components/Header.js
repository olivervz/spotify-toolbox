import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <>
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
        </>
    );
};

export default Header;
