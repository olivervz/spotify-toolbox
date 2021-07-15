const express = require("express");
const router = express.Router();

router.get("/Authorization", require("./Authorization"));
router.get(["/Username", "/ProfilePicture"], require("./UserInformation"));
router.get("/ListeningData", require("./ListeningData"));

module.exports = router;
