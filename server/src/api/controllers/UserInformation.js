let request = require("request");
let axios = require("axios");

const fetchUser = async (token) => {
    url = "https://api.spotify.com/v1/me";
    var headers = {};
    headers["Accept"] = "application/json";
    headers["Content-Type"] = "application/json";
    headers["Authorization"] = "Bearer " + token;
    const response = await axios
        .get(url, { headers: headers })
        .catch((error) => {
            console.error("server, fetch user", error);
        });
    return response.data;
};

exports.Username = async (req, res) => {
    let token = req.query.token;
    const user = await fetchUser(token);
    console.log(user);
    res.json(user.display_name);
};

exports.ProfilePicture = async (req, res) => {
    let token = req.query.token;
    const user = await fetchUser(token);
    res.json(user.images[0].url);
};
