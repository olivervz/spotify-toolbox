const express = require("express"),
    router = express.Router(),
    ListeningData = require("../controllers/ListeningData");

router.get("/ListeningData", ListeningData.ListeningData);

module.exports = router;
