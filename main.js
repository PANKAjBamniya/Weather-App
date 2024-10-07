const apiKey = "590d4a57a0f63c037991214c05ef15e1";

let search = document.querySelector('#search');
let input = document.querySelector('#input');
let cityDisplay = document.querySelector('.city'); 
let tempDisplay = document.querySelector('.temp'); 
let humidityDisplay = document.querySelector('.humidity'); 
let windDisplay = document.querySelector('.wind'); 

const checkWeather = async () => {
    let city = input.value.trim(); 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const apiData = await response.json();

        // Displaying fetched weather data in the UI
        cityDisplay.textContent = apiData.name;
        tempDisplay.textContent = `${apiData.main.temp}°C`;
        humidityDisplay.textContent = `${apiData.main.humidity}%`;
        windDisplay.textContent = `${apiData.wind.speed} km/h`;

    } catch (error) {
        console.error('Error fetching weather data:', error);
        
    }
};
checkWeather();
search.addEventListener('click', checkWeather);
