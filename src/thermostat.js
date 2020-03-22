function Thermostat(){
  this.temperature = 20
  this.minimumTemp = 10
  this.maximumTemp = 25
  this.powerSaving = true
  // this.energyUsage = "medium-usage"
};

Thermostat.prototype.turnUp = function(num) {
if ((this.temperature + num) > this.maximumTemp) {
  throw new Error(`Maximum temperature is ${this.maximumTemp}!`)
}
  this.temperature += num
  return this.temperature
};

Thermostat.prototype.turnDown = function(num) {
  if (this.minimumTemp > (this.temperature - num)){
    throw new Error(`Minimum temperature is ${this.minimumTemp}!`);
  }
  this.temperature -= num
  return this.temperature
};

Thermostat.prototype.powerSavingOn = function() {
  this.maximumTemp = 25
  this.powerSaving = true
};

Thermostat.prototype.powerSavingOff = function() {
  this.maximumTemp = 32
  this.powerSaving = false
};

Thermostat.prototype.reset = function() {
  this.temperature = 20
  this.powerSaving = true
};

Thermostat.prototype.energyUsage = function() {
  if (this.temperature > 25) {
    return "high-usage";
  } else if (this.temperature < 18) {
    return "low-usage";
  } else {
    return "medium-usage";
  };
};
