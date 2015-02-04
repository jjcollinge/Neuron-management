var express = require('express');
var router = express.Router();
var request = require('request');

/* GET filtered devices. */
router.get('/', function(req, res, next) {
  console.log(req.query);
  var param = req.query.search;
  request("http://localhost:9998/api/devices/?"+param, function(error, response, body) {
  	if(!error && response.statusCode == 200) {
  		var deviceArray = JSON.parse(body);
  		console.log(deviceArray);
  		res.render('index', { title: 'Express', devices: deviceArray });
  	}
  });
});

module.exports = router;