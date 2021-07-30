let axios = require("axios");

const fetchPlaylist = async (token, limit, trackIDs, artistIDs) => {
    let market = "US";
    while (trackIDs.length < 3) {
        trackIDs.push("");
    }
    while (artistIDs.length < 2) {
        artistIDs.push("");
    }

    var url =
        "https://api.spotify.com/v1/recommendations?limit=" +
        limit +
        "&seed_artists=" +
        artistIDs.slice(0, 2) +
        "&seed_tracks=" +
        trackIDs.slice(0, 3) +
        "&seed_genres=" +
        "&max_popularity=55" +
        "&min_popularity=25" +
        "&market=" +
        market;

    var headers = {};
    headers["Accept"] = "application/json";
    headers["Content-Type"] = "application/json";
    headers["Authorization"] = "Bearer " + token;
    const response = await axios
        .get(url, { headers: headers })
        .catch((error) => {
            console.error("server, fetch recommended playlist", error);
        });
    return response;
};

exports.RecommendedPlaylist = async (req, res) => {
    let token = req.query.token;
    let limit = req.query.limit;
    let trackIDs = req.query.seed_tracks.split(",");
    let artistIDs = req.query.seed_artists.split(",");
    const response = await fetchPlaylist(token, limit, trackIDs, artistIDs);
    res.send(response.data.tracks);
};
