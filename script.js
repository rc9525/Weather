function getCurrentWeatherData (event) {
    event.preventDefault();

    var searchInput = document.querySelector("#search-input");

    var cityName = searchInput.value;

    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=7583f92f7ca2f9b45d847d8993be7b42";

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        var searchedCity = document.querySelector("#searched-city");
        searchedCity.textContent = cityName;

        var currentTemp = document.querySelector("#current-temp");
        currentTemp.textContent = "Temp: " + data.main.temp
        var currentWind = document.querySelector("#current-wind");
        currentWind.textContent = "Wind: " + data.wind.speed
        var currentHumidity = document.querySelector("#current-humidity");
        currentHumidity.textContent = "Humidity: " + data.humidity
        // var currentPrecipitation = document.querySelector("#current-precipitation");
        // currentPrecipitation.textContent = "Precipitation: " + data.precipitation.mode 



        getForecastData();
    })

}

function getForecastData () {

    var searchInput = document.querySelector("#search-input");

    var cityName = searchInput.value;

    var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=7583f92f7ca2f9b45d847d8993be7b42";

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        var searchedCity = document.querySelector("#searched-city");
        searchedCity.textContent = cityName;



        // DISPLAY THE DATA
        var date0 = document.getElementById("date0");
        date0.textContent = dayjs().add(1, 'day').format("MM/DD/YYYY")
        var temp0 = document.getElementById("temp0");
        temp0.textContent = data.list[0].main.temp

        ///////////////
        var date8 = document.getElementById("date8");
        date8.textContent = dayjs().add(2, 'day').format("MM/DD/YYYY")
        var temp8 = document.getElementById("temp8");
        temp8.textContent = data.list[8].main.temp

        var date16 = document.getElementById("date16");
        date16.textContent = dayjs().add(3, 'day').format("MM/DD/YYYY")
        var temp16 = document.getElementById("temp16");
        temp16.textContent = data.list[16].main.temp

        var date24 = document.getElementById("date24");
        date24.textContent = dayjs().add(4, 'day').format("MM/DD/YYYY")
        var temp24 = document.getElementById("temp24");
        temp16.textContent = data.list[24].main.temp

        var date32 = document.getElementById("date32");
        date32.textContent = dayjs().add(5, 'day').format("MM/DD/YYYY")
        var temp32 = document.getElementById("temp32");
        temp16.textContent = data.list[32].main.temp

        

    })
}

var searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", getCurrentWeatherData)