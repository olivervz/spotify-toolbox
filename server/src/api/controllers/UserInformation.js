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
    res.json(user.display_name);
};

exports.ProfilePicture = async (req, res) => {
    let token = req.query.token;
    const user = await fetchUser(token);
    if (user.images.length === 0) {
        res.json(
            "https://steamuserimages-a.akamaihd.net/ugc/914659215888655432/82DCA20555DE13B0F76E9C833110411BC60DEB3F/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
        );
    } else {
        res.json(user.images[0].url);
    }
};
