$(function () {


	//Function to get json data
	function getWeatherData(zipcode) {
		var apikey = $('#apikey').val();
		/*if (apikey != "") {
			saveKey();
		};*/
		console.log("apikey=" + apikey);
		console.log("zipcode=" + zipcode);
		var weatherApi = 'http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&appid=' + apikey;
		$.getJSON(weatherApi)
			.done(function (data) {
			addNewItem(data);
			}).fail(function () {
				$('#form').append('<p> Can not load data </p>');
			});
	}
	
	//Event handler to get the data
	$('form').on('submit', function (e) {
		e.preventDefault();
		$('#weather').remove();
		getWeatherData($('#zip').val());
	});
	
	//Function to add weather data to the page
	function addNewItem(data){
		var item = '';
		item += '<h3>Weather info for' + ' ' + data.name + '</h3>';
		item += '<p>Current Temperature: ' + convertTemp(data.main.temp) + 'F</p>';
		item += '<p>Current Conditions: ' + data.weather[0].description + '</p>';
		item += '<p>Min Temperature: ' + convertTemp(data.main.temp_min) + '</p>';
		item += '<p>Max Temperature: ' + convertTemp(data.main.temp_max) + '</p>';
		$('#form').append('<div id = weather>' + item + '</div>');
	}
	
	//Function to convert Temperature
	function convertTemp (temp){
		return Math.round((temp * 1.8) - 459.67);
	}
	
});
	
	

	