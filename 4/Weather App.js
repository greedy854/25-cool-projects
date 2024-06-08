const apiKey = "ff95c3353e628679322036d3e7244ac1"; // Replace this with your actual API key

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

async function getWeatherByLocation(city) {
    try {
        console.log(`Fetching weather for ${city} with API key: ${apiKey}`);
        const resp = await fetch(url(city), {
            mode: "cors"
        });
        if (!resp.ok) {
            throw new Error(`Error fetching weather data: ${resp.statusText}`);
        }
        const respData = await resp.json();
        console.log('Weather data:', respData);
        addWeatherToPage(respData);
    } catch (error) {
        console.error(error);
    }
}

function addWeatherToPage(data) {
    if (!data.main || !data.weather) {
        console.error('Invalid data:', data);
        return;
    }
    
    const temp = Ktoc(data.main.temp);
    const weather = document.createElement('div');
    weather.classList.add('weather');

    weather.innerHTML = `
        <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h2>
        <small>${data.weather[0].main}</small>
    `;

    // Cleanup
    main.innerHTML = "";
    main.appendChild(weather);
}

function Ktoc(K) {
    return Math.floor(K - 273.15);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const city = search.value.trim();

    if (city) {
        getWeatherByLocation(city);
    } else {
        console.error('City name cannot be empty');
    }
});
