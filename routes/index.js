var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {

  console.log("Requesting devices from API");
  request("http://192.168.174.150:8080/thing-web/devices", function(error, response, body) {
  	if(!error && response.statusCode == 200) {
  		var deviceArray = JSON.parse(body);
  		res.render('index', { title: 'Express', devices: JSON.stringify(deviceArray) });
  	}
  })
});


module.exports = router;
