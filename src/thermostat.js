function Thermostat(){
  this.temperature = 20
};

Thermostat.prototype.turnUp = function(num) {
  this.temperature += num
  return this.temperature
};

Thermostat.prototype.turnDown = function(num) {
  this.temperature -= num
  return this.temperature
};
