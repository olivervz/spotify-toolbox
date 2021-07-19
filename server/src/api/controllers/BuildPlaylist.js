let axios = require("axios");
let querystring = require("querystring");

const createPlaylist = async (token, user_id) => {
    var url = "https://api.spotify.com/v1/users/" + user_id + "/playlists";

    var headers = {};
    headers["Accept"] = "application/json";
    headers["Content-Type"] = "application/json";
    headers["Authorization"] = "Bearer " + token;
    var data = {};
    data["name"] = "Recommended Songs - Spotify Toolbox";
    data["description"] = "Created using Spotify Toolbox";
    data["public"] = true;
    const response = await axios
        .post(url, data, { headers: headers })
        .catch((error) => {
            console.error("server, create playlist", error);
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
            console.error("server, populate playlist", error);
        });
    return response;
};

exports.BuildPlaylist = async (req, res) => {
    let token = req.query.token;
    let user_id = req.query.user_id;
    let urlUris = req.query.uris.replaceAll(",", "%2C").replaceAll(":", "%3A");
    let uris = req.query.uris;
    var response = await createPlaylist(token, user_id);
    response = await populatePlaylist(token, response.data.id, uris, urlUris);
    res.send(response.data);
};
