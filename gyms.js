const knex = require('knex')(require('./knexfile'))
var unirest = require('./unirest');

var pokemon = false;
var lastpokemon = false;
var pokestops = false;
var lastpokestops = false;
var luredonly = false;
var gyms = true;
var lastgyms = true;
var scanned = false;
var lastslocs = false;
var spawnpoints = false;
var lastsspawns = false;
var swLat = "";
var swLng = "";
var neLat = "";
var neLng = "";
var oSwLat = "";
var oSwLng = "";
var oNeLat = "";
var oNeLng = "";
var reids = "";
var eids = "";
var ville = "LYON";

module.exports = {
  updateGym ({token}) {
    console.log(`Récupération des informations des arènes`)
	unirest.get('https://www.livepokemap.fr/raw_data')
	.headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
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
    return Promise.resolve()
  }
}
