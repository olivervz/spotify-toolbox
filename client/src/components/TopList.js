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
                    let image =
                        "https://pbs.twimg.com/profile_images/425274582581264384/X3QXBN8C.jpeg";
                    if (props.artists) {
                        if (item.images.length > 0) {
                            image = item.images[0].url;
                        }
                        return (
                            <ArtistTrackCard
                                size={props.number}
                                number={i}
                                key={i}
                                trackName={null}
                                albumName={null}
                                artistName={item.name}
                                image={image}
                                webURL={item.external_urls.spotify}
                                popupURL={item.uri}
                                previewURL={null}
                                mobile={props.mobile}
                            />
                        );
                    } else {
                        if (item.album.images.length > 0) {
                            image = item.album.images[0].url;
                        }
                        return (
                            <ArtistTrackCard
                                size={props.number}
                                number={i}
                                key={i}
                                trackName={item.name}
                                albumName={item.album.name}
                                artistName={item.album.artists[0].name}
                                image={image}
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
