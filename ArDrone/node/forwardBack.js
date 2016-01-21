var arDrone = require('ar-drone');
var droneStatus = require('./status.js');
var client  = arDrone.createClient();

droneStatus.setupLogging(client, false);
client.takeoff();

client.after(5000, function(){
  droneStatus.log('altitude', droneStatus.demo);
  this.up(0.1);
})
.after(4000, function(){
  droneStatus.log('altitude', droneStatus.demo);
  this.stop();
})
.after(1000, function(){
  this.front(0.1);
})
.after(1000, function(){
  droneStatus.log('pitch', droneStatus.demo);
  this.stop();
})
.after(1000, function(){
  this.back(0.1);
})
.after(1000, function(){
  droneStatus.log('pitch', droneStatus.demo);
  this.stop();
})
.after(1000, function() {
  this.stop();
  this.land();
  droneStatus.log('battery', droneStatus.demo);
});
