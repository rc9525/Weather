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
        var currentWind = document.querySelector ("#current-wind");
        currentWind.textContent = "Wind: " + data.wind.speed

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


        // DISPLAY THE DATA
        console.log(data.list[0].main.temp)
        console.log(data.list[8].main.temp)
    })
}

var searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", getCurrentWeatherData)