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

    it('can be turned down', function() {
      thermostat.turnDown(3);
      expect(thermostat.temperature).toEqual(17);
    });
  });
});
