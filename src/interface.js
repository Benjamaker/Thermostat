  window.onload = function() {
    alert( "Welcome to thermostat" );
  };

  $(document).ready(function() {

    var thermostat = new Thermostat();

    function updateTemp() {
       $('#temperature').text(`The temperature is: ${thermostat.temperature}`);
       $('#temperature').attr('class', thermostat.energyUsage());
    };

    function updatePowerSaving() {
      if (thermostat.powerSaving === true) {
        $('#powerSaving').text("Power saving mode on");
      } else {
        $('#powerSaving').text("Power saving mode off");
      };
    };

    function getWeather() {
      $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
        $('#current-temperature').text(data.main.temp);
      });
    };

    updateTemp();
    updatePowerSaving();
    getWeather();

    $('#turnUp').click(function() {
      let value = $('#tempUp').val();
      thermostat.turnUp(parseInt(value));
      updateTemp();
    });

    $('#turnDown').click(function() {
      let value = $('#tempDn').val();
      thermostat.turnDown(parseInt(value));
      updateTemp();
    });

    $('#reset').click(function() {
      thermostat.reset();
      updateTemp();
      updatePowerSaving();
    });

    $('#powerSaverOn').click(function(){
      thermostat.powerSavingOn();
      updatePowerSaving();
    });

    $('#powerSaverOff').click(function(){
      thermostat.powerSavingOff();
      updatePowerSaving();
    });






  });
