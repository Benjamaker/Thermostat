'use strict';

describe('Feature test', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  });

  describe('temperature', function() {
    it('starts at 20', function() {
      expect(thermostat.temperature).toEqual(20);
    });

    it('can be turned up by 1', function() {
      thermostat.turnUp(1);
      expect(thermostat.temperature).toEqual(21);
    });

    it('can be turned up by 5', function() {
      thermostat.turnUp(5);
      expect(thermostat.temperature).toEqual(25);
    });

    it('raises an error if max temperature exceeded', function(){
      expect(function() { thermostat.turnUp(6)}).toThrowError(`Maximum temperature is ${thermostat.maximumTemp}!`)
    });

    it('raises an error if min temperature exceeded', function (){
      expect(function() { thermostat.turnDown(11)}). toThrowError(`Minimum temperature is ${thermostat.minimumTemp}!`)
    });

    it('can be turned down', function() {
      thermostat.turnDown(3);
      expect(thermostat.temperature).toEqual(17);
    });

    it('has a minimum temperature of 10', function() {
      expect(thermostat.minimumTemp).toEqual(10);
    });

    it('has a maximum temperature of 25', function() {
      expect(thermostat.maximumTemp).toEqual(25);
    });
  });

  describe('power saving mode', function() {
    it('is on by default', function() {
      expect(thermostat.powerSaving).toBeTruthy();
    });

    it('can be turned off', function() {
      thermostat.powerSavingOff()
      expect(thermostat.powerSaving).toBeFalsy();
    });
  });

  describe('reset', function() {
    it('can be reset to 20', function() {
      thermostat.reset()
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('energy usage', function() {
    it('has medium usage by default', function() {
      expect(thermostat.energyUsage()).toEqual("medium-usage")
    });

    it('has low usage', function() {
      thermostat.temperature = 10
      expect(thermostat.energyUsage()).toEqual("low-usage")
    });

    it('has high usage', function() {
      thermostat.powerSavingOff
      thermostat.temperature = 26
      expect(thermostat.energyUsage()).toEqual("high-usage")
    });
  });

















});
