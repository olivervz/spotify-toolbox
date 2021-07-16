import React from "react";
import "./ArtistCard.css";

const ArtistCard = (props) => {
    var card;
    if (props.size === 10) {
        card = (
            <div
                className="artist-card-container-10"
                onClick={() => {
                    window.location.href = props.popupURL;
                }}
                data-aos="zoom-in"
                data-aos-duration={1000 + props.number * 500}
            >
                <img
                    src={props.image}
                    alt="artist"
                    className="artist-card-10"
                ></img>
                <div className="number-container-10">
                    <h4 className="number-text-10">{props.number + 1}</h4>
                </div>
                <div className="artist-name-container-10">
                    <h4 className="artist-name-10">{props.name}</h4>
                </div>
            </div>
        );
    } else if (props.size === 18) {
        card = (
            <div
                className="artist-card-container-18"
                onClick={() => {
                    window.location.href = props.popupURL;
                }}
                data-aos="zoom-in"
                data-aos-duration={1000 + props.number * 500}
            >
                <img
                    src={props.image}
                    alt="artist"
                    className="artist-card-18"
                ></img>
                <div className="number-container-18">
                    <h4 className="number-text-18">{props.number + 1}</h4>
                </div>
                <div className="artist-name-container-18">
                    <h4 className="artist-name-18">{props.name}</h4>
                </div>
            </div>
        );
    } else {
        card = (
            <div
                className="artist-card-container-50"
                onClick={() => {
                    window.location.href = props.popupURL;
                }}
                data-aos="zoom-in"
                data-aos-duration={1000 + props.number * 500}
            >
                <img
                    src={props.image}
                    alt="artist"
                    className="artist-card-50"
                ></img>
                <div className="number-container-50">
                    <h4 className="number-text-50">{props.number + 1}</h4>
                </div>
                <div className="artist-name-container-50">
                    <h4 className="artist-name-50">{props.name}</h4>
                </div>
            </div>
        );
    }

    return card;
};

export default ArtistCard;
