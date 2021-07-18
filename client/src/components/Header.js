import React from "react";
import { Link } from "react-scroll";
import "./Header.css";

const Header = (props) => {
    return (
        <>
            <div className="sticky-header-container">
                <Link
                    activeClass="active"
                    to="top-artists-section"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    <h3 className="top-artists">top artists</h3>
                </Link>
                <Link
                    activeClass="active"
                    to="generate-playlists-section"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    <h3 className="generate-playlists">generate playlists</h3>
                </Link>
                <Link
                    activeClass="active"
                    to="discover-artists-section"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    <h3 className="discover-artists">discover-artists</h3>
                </Link>
                <div
                    className="logout-button"
                    onClick={() => {
                        window.location.href = process.env.REACT_APP_BASE_URL;
                    }}
                >
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
