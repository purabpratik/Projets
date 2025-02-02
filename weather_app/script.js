const apiKey = "";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


async function checkWeather() {
    let city = document.getElementById('city-input').value;
    const response = await fetch(url + city + `&appid=${apiKey}`);
    let data = await response.json();

    document.getElementById('city-name').textContent = data.name;
    document.getElementById('temperature').textContent = data.main.temp + " °C"; 
    document.getElementById('wind-speed').textContent = data.wind.speed + " km/hr"; 
    document.getElementById('humidity').textContent = data.main.humidity + " %"; 
}
