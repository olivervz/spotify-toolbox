let axios = require("axios");
let querystring = require("querystring");

const fetchListeningData = async (token, type, time_range) => {
    var url =
        "https://api.spotify.com/v1/me/top/" +
        type +
        "?time_range=" +
        time_range +
        "&limit=50";
    var headers = {};
    headers["Accept"] = "application/json";
    headers["Content-Type"] = "application/json";
    headers["Authorization"] = "Bearer " + token;
    const response = await axios
        .get(url, { headers: headers })
        .catch((error) => {
            console.error("server, fetch listening data", error);
        });
    return response;
};

exports.ListeningData = async (req, res) => {
    let token = req.query.token;
    let type = req.query.type;
    let time_range = req.query.time_range;
    const response = await fetchListeningData(token, type, time_range);
    const responseStr = JSON.stringify(response.data.items);
    res.json(responseStr);
};
