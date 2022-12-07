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
		all_days = ['Sunday', 'Monday', 'Tuesday', 'Wedensday', 'Thusrday', 'Friday', 'Saturday']
		current = new Date;
		current_str = String(current);
		current_split = current_str.split(' ');
		$('#current_day').text(all_days[current.getDay()]);
		$('#current_time').text(current_split[4]);
		$('#current_date').text(current_split[2] + ' ' + current_split[1] + ', ' + current_split[3]);

		$('.temp').text(response.temp);
		$('.min_temp').text(response.min_temp);
		$('.max_temp').text(response.max_temp);
		$('.wind_speed').text(response.wind_speed);
		$('.cloud_pct').text(response.cloud_pct);
		$('.feels_like').text(response.feels_like);
		$('.humidity').text(response.humidity);
		$('.wind_degrees').text(response.wind_degrees);
		$('.sunrise').text(response.sunrise);
		$('.sunset').text(response.sunset);
	})
	.catch(err => console.error(err));
}
$('#get_weath').on('click', function(e){
	e.preventDefault()
	get_weather($('#city').val());
})
get_weather('Mohali');
const work = async () => {
	await sleep(1000)
}
some_cities = ['Sri Ganganagar', 'Rajasthan', 'New Delhi', 'Mumbai', 'Bangloure', 'Hedrabad']
for (i in some_cities){
	fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${some_cities[i]}`, options)
	.then(response => response.json())
	.then((response) =>{
		$($('.city_temp')[i]).text(response.temp);
		$($('.city_min_temp')[i]).text(response.min_temp);
		$($('.city_max_temp')[i]).text(response.max_temp);
		$($('.city_wind_speed')[i]).text(response.wind_speed);
		$($('.city_cloud_pct')[i]).text(response.cloud_pct);
		$($('.city_feels_like')[i]).text(response.feels_like);
		$($('.city_humidity')[i]).text(response.humidity);
		$($('.city_wind_degrees')[i]).text(response.wind_degrees);
		$($('.city_sunrise')[i]).text(response.sunrise);
		$($('.city_sunset')[i]).text(response.sunset);
		work();
	})
	.catch(err => console.error(err));
}