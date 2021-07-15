import React from "react";
import "./ArtistCard.css";

const ArtistCard = (props) => {
    return (
        <div className="artist-card-container">
            <img src={props.image} alt="artist" className="artist-card"></img>
            <div className="artist-name-container">
                <h4 className="artist-name">{props.name}</h4>
            </div>
        </div>
    );
};

export default ArtistCard;
