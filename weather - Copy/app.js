//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const weatherApi = {
    key: "b3ff26ca3f6ae8bce3e86db7ba7821d6",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}

// event Listener function on keypress
const searchInputBox = document.getElementById('input-box');

searchInputBox.addEventListener('keypress', (event) => {

    if (event.keyCode == 13) {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display = "block";
    }

});

//  get weather report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
        .then(weather => {
            return weather.json();
        }).then(showWeatherReport);
}
// show weather report

function showWeatherReport(weather) {
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_min)}&deg;C (max)`;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    if (weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url(https://media.istockphoto.com/id/824800468/photo/sun-on-blue-sky-with-clouds.webp?b=1&s=170667a&w=0&k=20&c=rVSwIECCenLv_NYV76uQQdhc1VwOSkPqoIjHuqNu_sw=)";

    } else if (weatherType.textContent == 'Clouds') {
        document.body.style.backgroundImage = "url(https://media.istockphoto.com/id/512218646/photo/storm-sky-rain.jpg?s=612x612&w=0&k=20&c=RoUDM9BMwqW8NkPXjzAzlDKCHPOmdZhmmeT3jGA2EaM=)";
    }
    else if (weatherType.textContent == 'Rain') {
        document.body.style.backgroundImage = "url(https://cdn.vectorstock.com/i/500p/35/42/umbrella-with-heavy-rain-rainy-season-paper-art-vector-39133542.jpg)";


    } else if (weatherType.textContent == 'Snow') {
        document.body.style.backgroundImage = "url(https://hips.hearstapps.com/clv.h-cdn.co/assets/16/49/2048x1365/gallery-1481299207-gettyimages-553790585-1.jpg?resize=640:*)";
    }

    else if (weatherType.textContent == 'Thunderstorm'){
        document.body.style.backgroundImage = "url(https://www.thoughtco.com/thmb/U66MX1ZBcRS7WEqt3dH_LWnYwd0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-673747736-5b1989c3fa6bcc003614911a.jpg)";
    }

    else if (weatherType.textContent == 'Haze'){
        document.body.style.backgroundImage = "url(https://cloudatlas.wmo.int/images/compressed/4831_main_haze_lithometeors.JPG)";
    }

    else if (weatherType.textContent == 'Smoke'){
        document.body.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNamKaERM1IBaLl_vPVfu6vwDaCx5LU9zQ0LyidffJ9Q&s)";
    }


    
}




//  date manage

function dateManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}

