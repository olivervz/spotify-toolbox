import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import "./GeneratePlaylistsSection.css";
import TrackCard from "../TrackCard";

const GeneratePlaylistsSection = (props) => {
    const [generateFlag, setGenerateFlag] = useState(true);
    const [recommendedPlaylist, setRecommendedPlaylist] = useState([]);

    const generateSeeds = () => {
        // https://stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array
        const shuffledTracks = props.topTracks.sort(() => 0.5 - Math.random());
        const shuffledArtists = props.topArtists.sort(
            () => 0.5 - Math.random()
        );

        let allGenres = [];
        for (let i = 0; i < shuffledArtists.length; ++i) {
            for (let j = 0; j < shuffledArtists[i].genres.length; ++j) {
                allGenres.push(shuffledArtists[i].genres[j]);
            }
        }

        const shuffledGenres = allGenres.sort(() => 0.5 - Math.random());

        let trackIDs = [];
        let artistIDs = [];
        let genres = [];

        if (shuffledTracks.length !== 0) {
            for (let i = 0; i < 5; ++i) {
                trackIDs.push(shuffledTracks[i].id);
                artistIDs.push(shuffledArtists[i].id);
                if (shuffledGenres[i].indexOf(" ") !== -1) {
                    let validGenre = shuffledGenres[i].replaceAll(" ", "-");
                    genres.push(validGenre);
                } else {
                    genres.push(shuffledGenres[i]);
                }
            }

            generateRecommendedPlaylist(trackIDs, artistIDs, genres);
        }
    };

    const generateRecommendedPlaylist = async (trackIDs, artistIDs, genres) => {
        var limit = 20;
        const url =
            process.env.REACT_APP_API_URL +
            "/RecommendedPlaylist?token=" +
            props.access_token +
            "&limit=" +
            limit +
            "&seed_artists=" +
            trackIDs +
            "&seed_tracks=" +
            artistIDs +
            "&seed_genres=" +
            genres;
        setGenerateFlag(false);
        await Axios.get(url)
            .then((resp) => {
                setRecommendedPlaylist(resp.data);
            })
            .catch((error) => {
                console.error("in generate playlist", error);
            });
    };

    useEffect(() => {
        if (generateFlag) {
            generateSeeds();
        }
    });

    return (
        <div className="generate-playlists-section">
            <button
                onClick={() => {
                    setGenerateFlag(true);
                }}
            >
                Refresh
            </button>
            <div className="top-list-container">
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
