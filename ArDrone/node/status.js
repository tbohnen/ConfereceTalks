exports.setupLogging =
  function setupLogging(client, logAll){
  client.on('navdata', function(navdata){
    var demo = navdata.demo;

    if (demo != undefined){
      exports.demo = demo;

      if (logAll == true){
        outputData(demo);
      }
    }
  });

  function outputData(demo){
    console.log("Battery Percentage: ", demo.batteryPercentage);
    console.log("Altitude: ", demo.altitude);
    console.log("Roll: ", demo.rotation.roll);
    console.log("Pitch: ", demo.rotation.pitch);
    console.log("Yaw: ", demo.rotation.yaw);
  }
};


exports.log = function(sensor, demo){

  if (sensor == "altitude"){
    console.log("Altitude: ", demo.altitudeMeters, " Meters");
  }

  if (sensor == "pitch"){
    console.log("Pitch: ", demo.rotation.pitch);
  }

  if (sensor == "battery"){
    console.log("Battery Percentage: ", demo.batteryPercentage);
  }
}
