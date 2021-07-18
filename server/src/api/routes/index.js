const express = require("express");
const router = express.Router();

router.get("/Authorization", require("./Authorization"));
router.get(["/Username", "/ProfilePicture"], require("./UserInformation"));
router.get("/ListeningData", require("./ListeningData"));
router.get("/RecommendedPlaylist", require("./RecommendedPlaylist"));

module.exports = router;
