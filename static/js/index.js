const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cd94be3bc3mshd0651db71ac1c64p1f6f25jsn97bce86e8ddd',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const get_weather = (city)=>{
$('#city_name').text(city);
fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
	.then(response => response.json())
	.then((response) =>{
		$('#temp').text(response.temp)
		$('#min_temp').text(response.min_temp)
		$('#max_temp').text(response.max_temp)
		$('#wind_speed').text(response.wind_speed)
		$('#cloud_pct').text(response.cloud_pct)
		$('#feels_like').text(response.feels_like)
		$('#humidity').text(response.humidity)
		$('#wind_degrees').text(response.wind_degrees)
		$('#sunrise').text(response.sunrise)
		$('#sunset').text(response.sunset)
	})
	.catch(err => console.error(err));
}
$('#get_weath').on('click', function(e){
	e.preventDefault()
	get_weather($('#city').val());
})
get_weather('Mohali');