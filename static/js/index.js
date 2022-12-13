const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cd94be3bc3mshd0651db71ac1c64p1f6f25jsn97bce86e8ddd',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
// const get_weather = (city) => {
// 	$('#city_name').text(city);
// 	fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
// 		.then(response => response.json())
// 		.then((response) => {
// 			all_days = ['Sunday', 'Monday', 'Tuesday', 'Wedensday', 'Thusrday', 'Friday', 'Saturday']
// 			current = new Date;
// 			current_str = String(current);
// 			current_split = current_str.split(' ');
// 			$('#current_day').text(all_days[current.getDay()]);
// 			$('#current_time').text(current_split[4]);
// 			$('#current_date').text(current_split[2] + ' ' + current_split[1] + ', ' + current_split[3]);

// 			$('.temp').text(response.temp);
// 			$('.min_temp').text(response.min_temp);
// 			$('.max_temp').text(response.max_temp);
// 			$('.wind_speed').text(response.wind_speed);
// 			$('.cloud_pct').text(response.cloud_pct);
// 			$('.feels_like').text(response.feels_like);
// 			$('.humidity').text(response.humidity);
// 			$('.wind_degrees').text(response.wind_degrees);
// 			$('.sunrise').text(response.sunrise);
// 			$('.sunset').text(response.sunset);
// 		})
// 		.catch(err => console.error(err));
// }
// $('#get_weath').on('click', function (e) {
// 	e.preventDefault()
// 	get_weather($('#city').val());
// })
// get_weather('Mohali');

// fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${some_cities[0]}`, options)
// .then(response => response.json())
// .then((response) =>{
// 	$($('.city_temp')[0]).text(response.temp);
// 	$($('.city_min_temp')[0]).text(response.min_temp);
// 	$($('.city_max_temp')[0]).text(response.max_temp);
// 	$($('.city_wind_speed')[0]).text(response.wind_speed);
// 	$($('.city_cloud_pct')[0]).text(response.cloud_pct);
// 	$($('.city_feels_like')[0]).text(response.feels_like);
// 	$($('.city_humidity')[0]).text(response.humidity);
// 	$($('.city_wind_degrees')[0]).text(response.wind_degrees);
// 	$($('.city_sunrise')[0]).text(response.sunrise);
// 	$($('.city_sunset')[0]).text(response.sunset);
// })
// .catch(err => console.error(err));

some_cities = ['Mohali', 'Chandigarh', 'Sri Ganganagar', 'Rajasthan', 'New Delhi', 'Mumbai']

fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${some_cities[0]}`, options)
.then(response => response.json())
.then((response) =>{
	$('#in_city_1').val(some_cities[0]);
	$($('.temp')[0]).text(response.temp);
	// $($('.city_min_temp')).text(response.min_temp);
	// $($('.city_max_temp')).text(response.max_temp);
	// $($('.city_wind_speed')).text(response.wind_speed);
	// $($('.city_cloud_pct')).text(response.cloud_pct);
	// $($('.city_feels_like')).text(response.feels_like);
	// $($('.city_humidity')).text(response.humidity);
	// $($('.city_wind_degrees')).text(response.wind_degrees);
	// $($('.city_sunrise')).text(response.sunrise);
	// $($('.city_sunset')).text(response.sunset);
})
.catch(err => console.error(err));

fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${some_cities[1]}`, options)
.then(response => response.json())
.then((response) =>{
	$('#in_city_2').val(some_cities[1]);
	$($('.temp')[1]).text(response.temp);
	// $($('.city_min_temp')[1]).text(response.min_temp);
	// $($('.city_max_temp')[1]).text(response.max_temp);
	// $($('.city_wind_speed')[1]).text(response.wind_speed);
	// $($('.city_cloud_pct')[1]).text(response.cloud_pct);
	// $($('.city_feels_like')[1]).text(response.feels_like);
	// $($('.city_humidity')[1]).text(response.humidity);
	// $($('.city_wind_degrees')[1]).text(response.wind_degrees);
	// $($('.city_sunrise')[1]).text(response.sunrise);
	// $($('.city_sunset')[1]).text(response.sunset);
})
.catch(err => console.error(err));

fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${some_cities[2]}`, options)
.then(response => response.json())
.then((response) =>{
	$('#in_city_3').val(some_cities[2]);
	$($('.temp')[2]).text(response.temp);
	// $($('.city_min_temp')[2]).text(response.min_temp);
	// $($('.city_max_temp')[2]).text(response.max_temp);
	// $($('.city_wind_speed')[2]).text(response.wind_speed);
	// $($('.city_cloud_pct')[2]).text(response.cloud_pct);
	// $($('.city_feels_like')[2]).text(response.feels_like);
	// $($('.city_humidity')[2]).text(response.humidity);
	// $($('.city_wind_degrees')[2]).text(response.wind_degrees);
	// $($('.city_sunrise')[2]).text(response.sunrise);
	// $($('.city_sunset')[2]).text(response.sunset);
})
.catch(err => console.error(err));

fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${some_cities[3]}`, options)
.then(response => response.json())
.then((response) =>{
	$('#in_city_4').val(some_cities[3]);
	$($('.temp')[3]).text(response.temp);
	// $($('.city_min_temp')[3]).text(response.min_temp);
	// $($('.city_max_temp')[3]).text(response.max_temp);
	// $($('.city_wind_speed')[3]).text(response.wind_speed);
	// $($('.city_cloud_pct')[3]).text(response.cloud_pct);
	// $($('.city_feels_like')[3]).text(response.feels_like);
	// $($('.city_humidity')[3]).text(response.humidity);
	// $($('.city_wind_degrees')[3]).text(response.wind_degrees);
	// $($('.city_sunrise')[3]).text(response.sunrise);
	// $($('.city_sunset')[3]).text(response.sunset);
})
.catch(err => console.error(err));

fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${some_cities[4]}`, options)
.then(response => response.json())
.then((response) =>{
	$('#in_city_5').val(some_cities[4]);
	$($('.temp')[4]).text(response.temp);
	// $($('.city_min_temp')[3]).text(response.min_temp);
	// $($('.city_max_temp')[3]).text(response.max_temp);
	// $($('.city_wind_speed')[3]).text(response.wind_speed);
	// $($('.city_cloud_pct')[3]).text(response.cloud_pct);
	// $($('.city_feels_like')[3]).text(response.feels_like);
	// $($('.city_humidity')[3]).text(response.humidity);
	// $($('.city_wind_degrees')[3]).text(response.wind_degrees);
	// $($('.city_sunrise')[3]).text(response.sunrise);
	// $($('.city_sunset')[3]).text(response.sunset);
})
.catch(err => console.error(err));

fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${some_cities[5]}`, options)
.then(response => response.json())
.then((response) =>{
	$('#in_city_6').val(some_cities[5]);
	$($('.temp')[5]).text(response.temp);
	// $($('.city_min_temp')[3]).text(response.min_temp);
	// $($('.city_max_temp')[3]).text(response.max_temp);
	// $($('.city_wind_speed')[3]).text(response.wind_speed);
	// $($('.city_cloud_pct')[3]).text(response.cloud_pct);
	// $($('.city_feels_like')[3]).text(response.feels_like);
	// $($('.city_humidity')[3]).text(response.humidity);
	// $($('.city_wind_degrees')[3]).text(response.wind_degrees);
	// $($('.city_sunrise')[3]).text(response.sunrise);
	// $($('.city_sunset')[3]).text(response.sunset);
})
.catch(err => console.error(err));
