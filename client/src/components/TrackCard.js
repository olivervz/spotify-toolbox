import React from "react";
import "./TrackCard.css";

const TrackCard = (props) => {
    console.log(props);
    return (
        <div className="track-card-container">
            <img src={props.image} alt="album" className="track-card"></img>
            <div className="artist-name-container">
                <h4 className="artist-name">{props.artistName}</h4>
            </div>
            <div className="track-name-container">
                <h4 className="track-name">{props.trackName}</h4>
            </div>
        </div>
    );
};

export default TrackCard;
