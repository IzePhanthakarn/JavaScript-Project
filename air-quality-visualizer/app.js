// https://www.iqair.com/dashboard/api

const ROOT = 'https://api.airvisual.com/v2' //Root Api
const KEY = 'b5dc8a04-f873-46d2-8e6a-bef63bea24d6'; // Api Key

async function getAirQuality() {
    const response = await fetch(
        // `https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=${KEY}`
        `${ROOT}/nearest_city?key=${KEY}`
    );
    const { data: { current, city, state, country } } = await response.json();
    const { pollution, weather } = current;
    console.log(city)
    console.log(country)
    console.log(state)
    console.log(pollution)
    console.log(weather)
    return {
        city,
        state,
        country,
        aqi: pollution.aqius,
        temperature: weather.tp,
        humidity: weather.hu,
        wind: weather.ws
    };
}

function displayAirQuality({ city, state, country, aqi, temperature, humidity, wind }) {
    const cityElem = document.querySelector('.city');
    const stateCountryElem = document.querySelector('.state-country');
    const aqiElem = document.querySelector('.aqi > h1');
    const temperatureElem = document.querySelector('.temperature');
    const humidityElem = document.querySelector('.humidity');
    const windElem = document.querySelector('.wind');

    cityElem.innerText = city;
    stateCountryElem.innerText = `${state}, ${country}`;
    aqiElem.innerText = aqi;
    temperatureElem.innerText = `Temp: ${temperature}`;
    humidityElem.innerText = `Humidity: ${humidity}%`;
    windElem.innerText = `Wind: ${wind} m/s`;
}

function setAirQualityColor(aqi){
    if (aqi <= 50){
        document.documentElement.style.setProperty(
            '--current-aqi-color',
            'var(--good-aqi-color)'
        )
    } else if (aqi <= 100){
        document.documentElement.style.setProperty(
            '--current-aqi-color',
            'var(--medium-aqi-color)'
        )
    }else{
        document.documentElement.style.setProperty(
            '--current-aqi-color',
            'var(--bad-aqi-color)'
        )
    }
}

async function run() {
    // const city = "Nakhon Chai Si";
    // const state = "Nakhon Pathom";
    // const country = 'Thailand';

    const { city, state, country, aqi, temperature, humidity, wind } = await getAirQuality();
    displayAirQuality({ city, state, country, aqi, temperature, humidity, wind });
    setAirQualityColor(aqi);
}

run();