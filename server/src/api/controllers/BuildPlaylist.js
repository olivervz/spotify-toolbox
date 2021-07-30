let axios = require("axios");
let querystring = require("querystring");

const createPlaylist = async (token, user_id, seed_tracks, seed_artists) => {
    var url = "https://api.spotify.com/v1/users/" + user_id + "/playlists";

    var headers = {};
    headers["Accept"] = "application/json";
    headers["Content-Type"] = "application/json";
    headers["Authorization"] = "Bearer " + token;
    var data = {};
    data["name"] = "Recommended Songs - Spotify Toolbox";

    const tracks = seed_tracks.split(",");
    const artists = seed_artists.split(",");
    var description = "Seed Artists: ";
    for (let i = 0; i < artists.length; ++i) {
        if (i != artists.length - 1) {
            description += artists[i];
            description += ", ";
        } else {
            description += artists[i];
        }
    }
    description += " /// Seed Tracks: ";
    for (let i = 0; i < tracks.length; ++i) {
        if (i != tracks.length - 1) {
            description += tracks[i];
            description += ", ";
        } else {
            description += tracks[i];
        }
    }

    data["description"] = description;
    data["public"] = true;
    const response = await axios
        .post(url, data, { headers: headers })
        .catch((error) => {
            console.error("server, create playlist", error.response.data.error);
            return error.response.data.status;
        });
    return response;
};

const populatePlaylist = async (token, id, uris, urlUris) => {
    var url =
        "https://api.spotify.com/v1/playlists/" +
        id +
        "/tracks?uris=" +
        urlUris;

    var headers = {};
    headers["Accept"] = "application/json";
    headers["Content-Type"] = "application/json";
    headers["Authorization"] = "Bearer " + token;
    const response = await axios
        .post(url, uris, { headers: headers })
        .catch((error) => {
            console.error(
                "server, populate playlist",
                error.response.data.error
            );
            return error.response.data.status;
        });
    return response.status;
};

exports.BuildPlaylist = async (req, res) => {
    let token = req.query.token;
    let user_id = req.query.user_id;
    let seed_tracks = req.query.seed_tracks;
    let seed_artists = req.query.seed_artists;
    let urlUris = req.query.uris.replace(/,/g, "%2C").replace(/:/g, "%3A");
    let uris = req.query.uris;
    var response = await createPlaylist(
        token,
        user_id,
        seed_tracks,
        seed_artists
    );
    if (!response || response.status !== 201) {
        res.sendStatus(403);
    } else {
        response = await populatePlaylist(
            token,
            response.data.id,
            uris,
            urlUris
        );
        res.send(response.data);
    }
};
