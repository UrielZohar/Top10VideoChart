var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.status(200).sendFile(path.join(__dirname + '/dist/top10-video-chart/index.html'));
});

module.exports = router;
