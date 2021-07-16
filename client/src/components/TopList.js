import React from "react";
import ArtistCard from "./ArtistCard";
import TrackCard from "./TrackCard";
import "./TopList.css";

const TopList = (props) => {
    const list = props.list.slice(0, props.number);

    return (
        <div className="top-list-container">
            <ul className="top-list">
                {list.map((item, i) => {
                    if (props.artists) {
                        return (
                            <ArtistCard
                                size={props.number}
                                number={i}
                                name={item.name}
                                image={item.images[0].url}
                                webURL={item.external_urls.spotify}
                                popupURL={item.uri}
                            />
                        );
                    } else {
                        {
                            console.log(list);
                        }
                        return (
                            <TrackCard
                                size={props.number}
                                number={i}
                                trackName={item.name}
                                albumName={item.album.name}
                                artistName={item.album.artists[0].name}
                                image={item.album.images[0].url}
                                webURL={item.external_urls.spotify}
                                popupURL={item.uri}
                                previewURL={item.preview_url}
                            />
                        );
                    }
                })}
            </ul>
        </div>
    );
};

export default TopList;
