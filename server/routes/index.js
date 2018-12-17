var express = require('express');
var router = express.Router();
const app = express();
console.log('Definning the routes...');

app.use(express.static(__dirname + '/../../dist/natuelIntelligence/index.html'));

console.log('The __dirname is: ' + __dirname);

/*
router.get('/', function(req, res, next) {
  console.log('Get default path get request');
  console.log('The __dirname is: ' + __dirname);
  res.status(200).sendFile(path.join(__dirname + '/../../dist/natuelIntelligence/index.html'));
});
*/
app.get('*', function(req, res, next) {
  console.log('Get default path get request');
  console.log('The __dirname is: ' + __dirname);
  res.status(200).sendFile(path.join(__dirname + '/../../dist/natuelIntelligence/index.html'));
});


module.exports = router;
