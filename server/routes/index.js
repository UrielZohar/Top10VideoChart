var express = require('express');
var router = express.Router();
const logger = require('heroku-logger');

router.get('/', function(req, res, next) {
  logger.info('Get default path get request');
  logger.info('The __dirname is: ' + __dirname);
  res.status(200).sendFile(path.join(__dirname + '/dist/natuelIntelligence/index.html'));
});

module.exports = router;
