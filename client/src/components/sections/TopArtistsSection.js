import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import "./TopArtistsSection.css";

const TopArtistsSection = (props) => {
    const [numberSelection, setNumberSelection] = useState(18);
    const [artistsSelection, setArtistsSelection] = useState("artists");
    const [timeSelection, setTimeSelection] = useState("month");
    const [topArtistsShort, setTopArtistsShort] = useState([]);
    const [topArtistsMedium, setTopArtistsMedium] = useState([]);
    const [topArtistsLong, setTopArtistsLong] = useState([]);
    const [topTracksShort, setTopTracksShort] = useState([]);
    const [topTracksMedium, setTopTracksMedium] = useState([]);
    const [topTracksLong, setTopTracksLong] = useState([]);

    useEffect(() => {
        const fetchListening = async (type, timeRange) => {
            const url =
                process.env.REACT_APP_API_URL +
                "/ListeningData?token=" +
                props.access_token +
                "?type=" +
                type +
                "?time_range=" +
                timeRange;
            const response = await Axios.get(url);
            console.log(response);
            return null;
        };

        setTopArtistsShort(fetchListening("artists", "short_term"));
        setTopArtistsMedium(fetchListening("artists", "medium_term"));
        setTopArtistsLong(fetchListening("artists", "long_term"));
        setTopTracksShort(fetchListening("tracks", "short_term"));
        setTopTracksMedium(fetchListening("tracks", "medium_term"));
        setTopTracksLong(fetchListening("tracks", "long_term"));
    });

    return (
        <div className="top-artists-container">
            <div className="top-artists-title-container">
                <div className="top-artists-title">
                    <h1 className="top">Top </h1>
                    <h1 className="number">{numberSelection}</h1>
                    <h1 className="artists-tracks">{artistsSelection}</h1>
                    {timeSelection !== "all time" ? (
                        <h1 className="of-the-past"> of the past </h1>
                    ) : (
                        <h1 className="of"> of </h1>
                    )}
                    <h1 className="time-period">{timeSelection}</h1>
                </div>
            </div>
            <div className="edit-parameters-container">
                <h3
                    className="select-50"
                    onClick={() => {
                        setNumberSelection(50);
                    }}
                    style={
                        numberSelection === 50
                            ? { color: "#4a4a4a" }
                            : { color: "white" }
                    }
                >
                    50
                </h3>
                <h3
                    className="select-18"
                    onClick={() => {
                        setNumberSelection(18);
                    }}
                    style={
                        numberSelection === 18
                            ? { color: "#4a4a4a" }
                            : { color: "white" }
                    }
                >
                    18
                </h3>
                <h3
                    className="select-10"
                    onClick={() => {
                        setNumberSelection(10);
                    }}
                    style={
                        numberSelection === 10
                            ? { color: "#4a4a4a" }
                            : { color: "white" }
                    }
                >
                    10
                </h3>
                <h3
                    className="select-artists"
                    onClick={() => {
                        setArtistsSelection("tracks");
                    }}
                    style={
                        artistsSelection === "tracks"
                            ? { color: "#4a4a4a" }
                            : { color: "white" }
                    }
                >
                    tracks
                </h3>
                <h3
                    className="select-tracks"
                    onClick={() => {
                        setArtistsSelection("artists");
                    }}
                    style={
                        artistsSelection === "artists"
                            ? { color: "#4a4a4a" }
                            : { color: "white" }
                    }
                >
                    artists
                </h3>
                <h3
                    className="select-4-weeks"
                    onClick={() => {
                        setTimeSelection("4 weeks");
                    }}
                    style={
                        timeSelection === "4 weeks"
                            ? { color: "#4a4a4a" }
                            : { color: "white" }
                    }
                >
                    4 weeks
                </h3>
                <h3
                    className="select-6-months"
                    onClick={() => {
                        setTimeSelection("6 months");
                    }}
                    style={
                        timeSelection === "6 months"
                            ? { color: "#4a4a4a" }
                            : { color: "white" }
                    }
                >
                    6 months
                </h3>
                <h3
                    className="select-all-time"
                    onClick={() => {
                        setTimeSelection("all time");
                    }}
                    style={
                        timeSelection === "all time"
                            ? { color: "#4a4a4a" }
                            : { color: "white" }
                    }
                >
                    all time
                </h3>
            </div>
        </div>
    );
};

export default TopArtistsSection;
