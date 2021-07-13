const express = require("express"),
    router = express.Router(),
    Authorization = require("../controllers/Authorization");

router.get("/Authorization", Authorization.Authorization);

module.exports = router;
