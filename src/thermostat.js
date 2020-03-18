function Thermostat(){
  this.temperature = 20
  this.minimumTemp = 10
  this.maximumTemp = 25
};

Thermostat.prototype.turnUp = function(num) {
  this.temperature += num
  return this.temperature
};

Thermostat.prototype.turnDown = function(num) {
  if (this.minimumTemp === this.temperature){
    throw new Error("Minimum temperature reached");
  }
  this.temperature -= num
  return this.temperature
};

Thermostat.prototype.powerSaving = function() {
  this.maximumTemp = 25
  return true
};
