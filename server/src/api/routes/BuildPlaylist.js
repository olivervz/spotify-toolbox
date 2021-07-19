const express = require("express"),
    router = express.Router(),
    BuildPlaylist = require("../controllers/BuildPlaylist");

router.get("/BuildPlaylist", BuildPlaylist.BuildPlaylist);

module.exports = router;
