import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import "./GeneratePlaylistsSection.css";
import TrackCard from "../TrackCard";

const GeneratePlaylistsSection = (props) => {
    const [generateFlag, setGenerateFlag] = useState(true);
    const [successFlag, setSuccessFlag] = useState(null);
    const [recommendedPlaylist, setRecommendedPlaylist] = useState([]);

    const generateSeeds = () => {
        let trackIDs = [];
        let artistIDs = [];
        if (props.topTracks.length !== 0) {
            for (let i = 0; i < 3; ++i) {
                let randomTrack =
                    props.topTracks[
                        Math.floor(Math.random() * props.topTracks.length)
                    ];
                trackIDs.push(randomTrack.id);
                let randomArtist =
                    props.topArtists[
                        Math.floor(Math.random() * props.topArtists.length)
                    ];
                artistIDs.push(randomArtist.id);
            }

            generateRecommendedPlaylist(trackIDs, artistIDs);
        }
    };

    const generateRecommendedPlaylist = async (trackIDs, artistIDs) => {
        setGenerateFlag(false);
        var limit = 20;
        const url =
            process.env.REACT_APP_API_URL +
            "/RecommendedPlaylist?token=" +
            props.access_token +
            "&limit=" +
            limit +
            "&seed_artists=" +
            artistIDs +
            "&seed_tracks=" +
            trackIDs;
        await Axios.get(url)
            .then((resp) => {
                setRecommendedPlaylist(resp.data);
            })
            .catch((error) => {
                console.error("in generate playlist", error);
            });
    };

    const createPlaylist = async () => {
        setGenerateFlag(null);
        var uriList = [];
        for (let i = 0; i < recommendedPlaylist.length; ++i) {
            uriList.push(recommendedPlaylist[i].uri);
        }

        var uris = uriList.join(",");

        const url =
            process.env.REACT_APP_API_URL +
            "/BuildPlaylist?token=" +
            props.access_token +
            "&user_id=" +
            props.userID +
            "&uris=" +
            uris;

        await Axios.get(url)
            .then((resp) => {
                console.log(resp);
                setSuccessFlag(true);
            })
            .catch((error) => {
                console.error("in create playlist", error);
                setSuccessFlag(false);
            });
    };

    useEffect(() => {
        if (generateFlag) {
            generateSeeds();
        }
    });

    console.log(window.innerWidth);
    return (
        <div className="generate-playlists-section">
            <div className="recommended-playlist-title-container">
                <h1 className="recommended-playlist-title">Recommended</h1>
                {successFlag !== null ? (
                    <div
                        className={
                            successFlag
                                ? "create-playlist-success"
                                : "create-playlist-failure"
                        }
                    >
                        {successFlag
                            ? "playlist created successfully"
                            : "error creating playlist, please try again"}
                    </div>
                ) : (
                    ""
                )}
                {window.innerWidth > 500 ? (
                    <div
                        className="refresh-playlist-button-container"
                        onClick={() => {
                            setGenerateFlag(true);
                            setSuccessFlag(null);
                        }}
                    >
                        <svg
                            viewBox="0 0 53 53"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g filter="url(#filter0_d)">
                                <path
                                    d="M42.3865 6.60937C38.3058 2.53125 32.7054 0 26.4859 0C14.0469 0 4 10.0687 4 22.5C4 34.9313 14.0469 45 26.4859 45C36.9831 45 45.7355 37.8281 48.2402 28.125H42.3865C40.0788 34.6781 33.8311 39.375 26.4859 39.375C17.1707 39.375 9.60037 31.8094 9.60037 22.5C9.60037 13.1906 17.1707 5.625 26.4859 5.625C31.1576 5.625 35.3227 7.56563 38.3621 10.6313L29.3002 19.6875H49V0L42.3865 6.60937Z"
                                    fill="white"
                                />
                            </g>
                            <defs>
                                <filter
                                    id="filter0_d"
                                    x="0"
                                    y="0"
                                    width="53"
                                    height="53"
                                    filterUnits="userSpaceOnUse"
                                    color-interpolation-filters="sRGB"
                                >
                                    <feFlood
                                        flood-opacity="0"
                                        result="BackgroundImageFix"
                                    />
                                    <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in2="BackgroundImageFix"
                                        result="effect1_dropShadow"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="effect1_dropShadow"
                                        result="shape"
                                    />
                                </filter>
                            </defs>
                        </svg>
                    </div>
                ) : (
                    <div
                        className="refresh-playlist-button-mobile"
                        onClick={() => {
                            setGenerateFlag(true);
                        }}
                    >
                        refresh
                    </div>
                )}
                <h3
                    className="create-playlist-button"
                    onClick={() => {
                        createPlaylist();
                    }}
                >
                    create playlist
                </h3>
            </div>
            <div className="top-list-recommended-container">
                <ul className="top-list">
                    {recommendedPlaylist.map((item, i) => {
                        return (
                            <TrackCard
                                size={props.number}
                                number={i}
                                key={i}
                                trackName={item.name}
                                albumName={item.album.name}
                                artistName={item.album.artists[0].name}
                                image={item.album.images[0].url}
                                webURL={item.external_urls.spotify}
                                popupURL={item.uri}
                                previewURL={item.preview_url}
                            />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default GeneratePlaylistsSection;
