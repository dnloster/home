var temp = document.getElementById("temperature");
var humid = document.getElementById("humidity");

fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=21.0294498&lon=105.8544441&appid=7130481c58316a1d1cb4e818f4888610"
)
    .then((response) => response.json())
    .then((data) => {
        temp.innerHTML = Math.floor(data.main.temp - 273) + "&#8451;";
        humid.innerHTML = data.main.humidity + "%";
    });
