let request = require("request");

exports.Authorization = (req, res) => {
    let code = req.query.code;
    let authOptions = {
        url: "https://accounts.spotify.com/api/token",
        form: {
            code: code,
            redirect_uri: process.env.REDIRECT_URI,
            grant_type: "authorization_code",
        },
        headers: {
            Authorization:
                "Basic " +
                new Buffer.from(
                    process.env.SPOTIFY_CLIENT_ID +
                        ":" +
                        process.env.SPOTIFY_CLIENT_SECRET
                ).toString("base64"),
        },
        json: true,
    };
    request.post(authOptions, function (error, response, body) {
        res.json(body);
    });
};
