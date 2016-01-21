var arDrone = require('ar-drone');
var status = require('./status.js');
var client  = arDrone.createClient();

client.on('navdata', console.log);
client.takeoff();

client
.after(6000, function() {
  this.land();
});
