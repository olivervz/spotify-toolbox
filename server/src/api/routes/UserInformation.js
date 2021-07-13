const express = require("express"),
    router = express.Router(),
    UserInformation = require("../controllers/UserInformation");

router.get("/Username", UserInformation.Username);
router.get("/ProfilePicture", UserInformation.ProfilePicture);

module.exports = router;
