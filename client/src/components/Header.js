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
                    <h3
                        className="top-artists"
                        onClick={props.linkTopArtists()}
                    >
                        top artists
                    </h3>
                </Link>
                <Link
                    activeClass="active"
                    to="generate-playlists-section"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    <h3
                        className="generate-playlists"
                        onClick={props.linkGeneratePlaylists()}
                    >
                        generate playlists
                    </h3>
                </Link>
                <Link
                    activeClass="active"
                    to="discover-artists-section"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    <h3
                        className="discover-artists"
                        onClick={props.linkDiscoverArtists()}
                    >
                        discover-artists
                    </h3>
                </Link>
                <div className="logout-button" onClick={props.logout()}>
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
