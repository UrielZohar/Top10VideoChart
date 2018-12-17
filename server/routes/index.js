var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.status(200).sendFile(path.join(__dirname + '/dist/natuelIntelligence/index.html'));
});

module.exports = router;
