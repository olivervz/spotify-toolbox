let axios = require("axios");

const fetchPlaylist = async (token, limit, trackIDs, artistIDs, genres) => {
    var url =
        "https://api.spotify.com/v1/recommendations?limit=" +
        limit +
        "&seed_artists=" +
        artistIDs[0] +
        "&seed_genres=" +
        // genres[0] +
        // fix this lol
        "hip-hop,idm" +
        "&seed_tracks=" +
        trackIDs.slice(0, 2) +
        "&max_popularity=50" +
        "&min_popularity=20";
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
    let genres = req.query.seed_genres.split(",");
    const response = await fetchPlaylist(
        token,
        limit,
        trackIDs,
        artistIDs,
        genres
    );
    res.send(response.data.tracks);
};
