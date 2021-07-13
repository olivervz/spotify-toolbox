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
                new Buffer(
                    process.env.SPOTIFY_CLIENT_ID +
                        ":" +
                        process.env.SPOTIFY_CLIENT_SECRET
                ).toString("base64"),
        },
        json: true,
    };
    console.log(process.env.REDIRECT_URI);
    request.post(authOptions, (error, response, body) => {
        if (error) {
            res.send(error);
        } else {
            res.send(body);
        }
    });
};
