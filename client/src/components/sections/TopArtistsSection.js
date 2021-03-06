import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import TopList from "../TopList";
import "./TopArtistsSection.css";

const TopArtistsSection = (props) => {
    const [numberSelection, setNumberSelection] = useState(50);
    const [artistsSelection, setArtistsSelection] = useState("tracks");
    const [timeSelection, setTimeSelection] = useState("6 months");
    const [topArtistsShort, setTopArtistsShort] = useState([]);
    const [topArtistsMedium, setTopArtistsMedium] = useState([]);
    const [topArtistsLong, setTopArtistsLong] = useState([]);
    const [topTracksShort, setTopTracksShort] = useState([]);
    const [topTracksMedium, setTopTracksMedium] = useState([]);
    const [topTracksLong, setTopTracksLong] = useState([]);
    var activeList = [];

    useEffect(() => {
        const fetchListening = async (setter, type, timeRange) => {
            const url =
                process.env.REACT_APP_API_URL +
                "/ListeningData?token=" +
                props.access_token +
                "&type=" +
                type +
                "&time_range=" +
                timeRange;
            await Axios.get(url)
                .then((resp) => {
                    setter(resp.data.items);
                })
                .catch((error) => {
                    console.error("in fetch listening", error);
                });
        };
        fetchListening(setTopArtistsShort, "artists", "short_term");
        fetchListening(setTopArtistsMedium, "artists", "medium_term");
        fetchListening(setTopArtistsLong, "artists", "long_term");
        fetchListening(setTopTracksShort, "tracks", "short_term");
        fetchListening(setTopTracksMedium, "tracks", "medium_term");
        fetchListening(setTopTracksLong, "tracks", "long_term");
    }, []);

    useEffect(() => {
        props.setTopArtists(topArtistsShort);
        props.setTopTracks(topTracksShort);
    }, [topArtistsShort, topTracksShort]);

    if (artistsSelection === "tracks") {
        if (timeSelection === "4 weeks") {
            activeList = topTracksShort;
        } else if (timeSelection === "6 months") {
            activeList = topTracksMedium;
        } else {
            activeList = topTracksLong;
        }
    } else {
        if (timeSelection === "4 weeks") {
            activeList = topArtistsShort;
        } else if (timeSelection === "6 months") {
            activeList = topArtistsMedium;
        } else {
            activeList = topArtistsLong;
        }
    }

    const white = "#ffffff";

    return (
        <div className="top-artists-container">
            <div className="top-artists-title-container">
                <div className="top-artists-title" data-aos="fade-in">
                    <h1 className="top">Your top </h1>
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
            <div
                className={
                    !props.mobile
                        ? "edit-parameters-container"
                        : "edit-parameters-container-mobile"
                }
            >
                <h3
                    className={!props.mobile ? "select-50" : "select-50-mobile"}
                    onClick={() => {
                        setNumberSelection(50);
                    }}
                    style={
                        numberSelection === 50
                            ? { color: "#4a4a4a" }
                            : { color: white }
                    }
                >
                    50
                </h3>
                <h3
                    className="select-18"
                    className={!props.mobile ? "select-18" : "select-18-mobile"}
                    onClick={() => {
                        setNumberSelection(18);
                    }}
                    style={
                        numberSelection === 18
                            ? { color: "#4a4a4a" }
                            : { color: white }
                    }
                >
                    18
                </h3>
                <h3
                    className="select-10"
                    className={!props.mobile ? "select-10" : "select-10-mobile"}
                    onClick={() => {
                        setNumberSelection(10);
                    }}
                    style={
                        numberSelection === 10
                            ? { color: "#4a4a4a" }
                            : { color: white }
                    }
                >
                    10
                </h3>
                <h3
                    className="select-artists"
                    className={
                        !props.mobile
                            ? "select-artists"
                            : "select-artists-mobile"
                    }
                    onClick={() => {
                        setArtistsSelection("tracks");
                    }}
                    style={
                        artistsSelection === "tracks"
                            ? { color: "#4a4a4a" }
                            : { color: white }
                    }
                >
                    tracks
                </h3>
                <h3
                    className="select-tracks"
                    className={
                        !props.mobile ? "select-tracks" : "select-tracks-mobile"
                    }
                    onClick={() => {
                        setArtistsSelection("artists");
                    }}
                    style={
                        artistsSelection === "artists"
                            ? { color: "#4a4a4a" }
                            : { color: white }
                    }
                >
                    artists
                </h3>
                <h3
                    className="select-4-weeks"
                    className={
                        !props.mobile
                            ? "select-4-weeks"
                            : "select-4-weeks-mobile"
                    }
                    onClick={() => {
                        setTimeSelection("4 weeks");
                    }}
                    style={
                        timeSelection === "4 weeks"
                            ? { color: "#4a4a4a" }
                            : { color: white }
                    }
                >
                    4 weeks
                </h3>
                <h3
                    className="select-6-months"
                    className={
                        !props.mobile
                            ? "select-6-months"
                            : "select-6-months-mobile"
                    }
                    onClick={() => {
                        setTimeSelection("6 months");
                    }}
                    style={
                        timeSelection === "6 months"
                            ? { color: "#4a4a4a" }
                            : { color: white }
                    }
                >
                    6 months
                </h3>
                <h3
                    className={
                        !props.mobile
                            ? "select-all-time"
                            : "select-all-time-mobile"
                    }
                    onClick={() => {
                        setTimeSelection("all time");
                    }}
                    style={
                        timeSelection === "all time"
                            ? { color: "#4a4a4a" }
                            : { color: white }
                    }
                >
                    all time
                </h3>
            </div>
            <TopList
                number={numberSelection}
                list={activeList}
                artists={artistsSelection === "artists" ? true : false}
                mobile={props.mobile}
            />
        </div>
    );
};

export default TopArtistsSection;
