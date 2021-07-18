const express = require("express"),
    router = express.Router(),
    RecommendedPlaylist = require("../controllers/RecommendedPlaylist");

router.get("/RecommendedPlaylist", RecommendedPlaylist.RecommendedPlaylist);

module.exports = router;
