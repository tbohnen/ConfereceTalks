var arDrone = require('ar-drone');
var client = arDrone.createClient();

client.takeoff();
client.after(5000, function(){
  client.animate('turnaround', 3000);
});


client.after(7000, function(){
  this.land();
});
