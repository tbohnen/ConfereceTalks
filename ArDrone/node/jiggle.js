var arDrone = require('ar-drone');
var droneStatus = require('./status.js');
var client  = arDrone.createClient();

droneStatus.setupLogging(client, true);

client.takeoff();

client
.after(5000, function(){
  this.left(0.4);
})
.after(1000, function(){
  this.right(0.6);
})
.after(1000, function(){
  this.left(0.4);
})
.after(1000, function(){
  this.right(0.6);
})
.after(1000, function(){
  this.left(0.4);
})
.after(1000, function() {
  this.stop();
  this.land();

  droneStatus.log('battery', droneStatus.demo);
});

