import React from "react";
import "./ArtistTrackCard.css";

const ArtistTrackCard = (props) => {
    const speed = 500;
    const animation = "zoom-in";

    const card = (
        <div
            className="card-container"
            data-aos={animation}
            data-aos-duration={speed}
        >
            <img
                src={props.image}
                className="card-image"
                onClick={() => {
                    window.location.href = props.popupURL;
                }}
            />
            <div className="card-artist-container">
                <h2 className="card-artist-text">{props.artistName}</h2>
            </div>
            {props.trackName !== null ? (
                <div className="card-track-container">
                    <h3 className="card-track-text">{props.trackName}</h3>
                </div>
            ) : (
                ""
            )}
        </div>
    );

    const cardMobile = (
        <div
            className="card-container-mobile"
            data-aos={animation}
            data-aos-duration={speed}
        >
            <img
                src={props.image}
                className="card-image-mobile"
                onClick={() => {
                    window.location.href = props.popupURL;
                }}
            />
            <div className="card-artist-container-mobile">
                <h2 className="card-artist-text-mobile">{props.artistName}</h2>
            </div>
            {props.trackName !== null ? (
                <div className="card-track-container-mobile">
                    <h3 className="card-track-text-mobile">
                        {props.trackName}
                    </h3>
                </div>
            ) : (
                ""
            )}
        </div>
    );

    if (props.mobile === true) {
        return cardMobile;
    } else {
        return card;
    }
};
export default ArtistTrackCard;
