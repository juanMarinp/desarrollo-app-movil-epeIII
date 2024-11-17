// monitoring.js
document.addEventListener('deviceready', function() {
  if (window.sensors) {
    window.sensors.enableSensor("LIGHT");
    window.sensors.enableSensor("TEMPERATURE");
    window.sensors.enableSensor("HUMIDITY");

    window.sensors.getState(function(values) {
      document.getElementById("temperature").textContent = values[0] + "°C";
      document.getElementById("humidity").textContent = values[1] + "%";
      document.getElementById("light").textContent = values[2] + " lux";
    });
  }
});
