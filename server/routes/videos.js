const express = require('express');
const router = express.Router();
const {videos} = require("../dal/videos");

router.get('/', function(req, res, next) {
    res.send(videos);
});

module.exports = router;
