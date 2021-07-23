import React from "react";
import ArtistTrackCard from "./ArtistTrackCard";
import "./TopList.css";

const TopList = (props) => {
    const list = props.list.slice(0, props.number);

    return (
        <div
            className={
                !props.mobile
                    ? "top-list-container"
                    : "top-list-container-mobile"
            }
        >
            <ul className="top-list">
                {list.map((item, i) => {
                    if (props.artists) {
                        return (
                            <ArtistTrackCard
                                size={props.number}
                                number={i}
                                key={i}
                                trackName={null}
                                albumName={null}
                                artistName={item.name}
                                image={item.images[0].url}
                                webURL={item.external_urls.spotify}
                                popupURL={item.uri}
                                previewURL={null}
                                mobile={props.mobile}
                            />
                        );
                    } else {
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
                    }
                })}
            </ul>
        </div>
    );
};

export default TopList;
