import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import "./GeneratePlaylistsSection.css";
import TrackCard from "../TrackCard";
import ArtistTrackCard from "../ArtistTrackCard";

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

    return (
        <div className="generate-playlists-section">
            <div className="recommended-playlist-title-container">
                <h1
                    className="recommended-playlist-title"
                    data-aos="fade-in"
                    data-aos-duration="500"
                >
                    Recommended
                </h1>
                {successFlag !== null ? (
                    <div
                        data-aos="fade-in"
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
                <div
                    data-aos="fade-in"
                    data-aos-duration="500"
                    className="refresh-playlist-button"
                    onClick={() => {
                        setGenerateFlag(true);
                    }}
                >
                    refresh
                </div>
                <h3
                    data-aos="fade-in"
                    data-aos-duration="500"
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
                            <ArtistTrackCard
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
                                mobile={props.mobile}
                            />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default GeneratePlaylistsSection;
