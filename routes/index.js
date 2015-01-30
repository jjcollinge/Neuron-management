var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {

  console.log("Requesting devices from API");
  request("http://localhost:9998/api/devices/", function(error, response, body) {
  	if(!error && response.statusCode == 200) {
  		var deviceArray = JSON.parse(body);
  		res.render('index', { title: 'Express', devices: deviceArray });
  	}
  })
});

module.exports = router;
