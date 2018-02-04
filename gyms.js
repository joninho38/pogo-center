const knex = require('knex')(require('./knexfile'));
const unirest = require('unirest');
var querystring = require('querystring');
var request = require('request');

var pokemon = "false";
var lastpokemon = "false";
var pokestops = "false";
var lastpokestops = "false";
var luredonly = "false";
var gyms = "true";
var lastgyms = "true";
var scanned = "false";
var lastslocs = "false";
var spawnpoints = "false";
var lastsspawns = "false";
var swLat = "45.64626048919313";
var swLng = "4.588541994043908";
var neLat = "45.858985911056486";
var neLng = "5.247721681543908";
var oSwLat = "45.64626048919313";
var oSwLng = "4.588541994043908";
var oNeLat = "45.858985911056486";
var oNeLng = "5.247721681543908";
var reids = "";
var eids = "";
var ville = "LYON";

module.exports = {
  updateGym ({token}) {
    console.log(`Récupération des informations des arènes`)
	unirest.post('https://www.livepokemap.fr/raw_data')
//	.headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
	.send({ "pokemon": pokemon })
	.send({ "lastpokemon": lastpokemon })
	.send({ "pokestops": pokestops })
	.send({ "lastpokestops": lastpokestops })
	.send({ "luredonly": luredonly })
	.send({ "gyms": gyms })
	.send({ "lastgyms": lastgyms })
	.send({ "scanned": scanned })
	.send({ "lastslocs": lastslocs })
	.send({ "spawnpoints": spawnpoints })
	.send({ "lastsspawns": lastsspawns })
	.send({ "swLat": swLat })
	.send({ "swLng": swLng })
	.send({ "neLat": neLat })
	.send({ "neLng": neLng })
	.send({ "oSwLat": oSwLat })
	.send({ "oSwLng": oSwLng })
	.send({ "oNeLat": oNeLat })
	.send({ "oNeLng": oNeLng })
	.send({ "reids": reids })
	.send({ "eids": eids })
	.send({ "token": token })
	.send({ "ville": ville })
	.send({ "timestamp": Date.now() })
	.end(function (response) {
	  console.log(response.body);
	});
	
	
	// Second way
	var form = {
    gyms: gyms,
    lastgyms: lastgyms,
    swLat: swLat,
    swLng: swLng,
    neLat: neLat,
    neLng: neLng,
    oSwLat: oSwLat,
    oSwLng: oSwLng,
    oNeLat: oNeLat,
    oNeLng: oNeLng,
    token: token,
    ville: ville,
    timestamp: Date.now()
	};

	var formData = querystring.stringify(form);
	var contentLength = formData.length;

	request({
		headers: {
      'Content-Length': contentLength,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    uri: 'https://www.livepokemap.fr/raw_data',
    body: formData,
    method: 'POST'
	  }, function (err, res, body) {
		  console.log("Second way : ");
		  console.log(response.body);
	  });
	
    return Promise.resolve()
  }
}
