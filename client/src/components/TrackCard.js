import React from "react";
import "./TrackCard.css";

const TrackCard = (props) => {
    var card;
    console.log(props.size);

    if (props.size === 10) {
        card = (
            <div
                className="track-card-container-10"
                onClick={() => {
                    window.location.href = props.popupURL;
                }}
            >
                <img
                    src={props.image}
                    alt="album"
                    className="track-card-10"
                ></img>
                <div className="number-container-10">
                    <h4 className="number-text-10">{props.number + 1}</h4>
                </div>
                <div className="artist-name-container-10">
                    <h4 className="artist-name-10">{props.artistName}</h4>
                </div>
                <div className="track-name-container-10">
                    <h4 className="track-name-10">{props.trackName}</h4>
                </div>
            </div>
        );
    } else if (props.size === 18) {
        card = (
            <div
                className="track-card-container-18"
                onClick={() => {
                    window.location.href = props.popupURL;
                }}
            >
                <img
                    src={props.image}
                    alt="album"
                    className="track-card-18"
                ></img>
                <div className="number-container-18">
                    <h4 className="number-text-18">{props.number + 1}</h4>
                </div>
                <div className="artist-name-container-18">
                    <h4 className="artist-name-18">{props.artistName}</h4>
                </div>
                <div className="track-name-container-18">
                    <h4 className="track-name-18">{props.trackName}</h4>
                </div>
            </div>
        );
    } else {
        card = (
            <div
                className="track-card-container-50"
                onClick={() => {
                    window.location.href = props.popupURL;
                }}
            >
                <img
                    src={props.image}
                    alt="album"
                    className="track-card-50"
                ></img>
                <div className="number-container-50">
                    <h4 className="number-text-50">{props.number + 1}</h4>
                </div>
                <div className="artist-name-container-50">
                    <h4 className="artist-name-50">{props.artistName}</h4>
                </div>
                <div className="track-name-container-50">
                    <h4 className="track-name-50">{props.trackName}</h4>
                </div>
            </div>
        );
    }
    return card;
};

export default TrackCard;
