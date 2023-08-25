<p className="date">${data.list[i].dt_txt.split(' ')[0]}</p>
<br>
    <p className="min-temp">LOW: ${data.list[i].main.temp_min}&deg;F</p>
    <hr>
        <p className="max-temp">HIGH: ${data.list[i].main.temp_max}&deg;F</p>
        <hr>
            <p className="conditions">Conditions: ${data.list[i].weather[0].description}</p>
            <hr>
                <p className="humidity">Humidity: ${data.list[i].main.humidity} %</p>
                <hr>
                    <p className="wind">Wind: ${data.list[i].wind.speed} MPH</p>
                    <hr>
                        <p className="pressure">Pressure: ${data.list[i].main.pressure} hPa</p>
                        <br>


                            <h5 className="card-title">Card Title</h5>
                            <p className="card-text card-details">Card details go here.</p>
                            <p>Additional details can be revealed here.</p>




                            //THIS WORKS BUT YOU NEED TO FIND OUT HOW TO COMBINE THE TWO CAUSE RN THEY ARE WORKING SEPARATELY


                            document.getElementById('search-form').addEventListener('submit', async (event) => {
                            event.preventDefault();

                            const cityInput = document.getElementById('city-input').value;
                            const apiKey = OPEN_WEATHER_APPID; // Replace with your actual API key
                            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`;

                            try {
                            const response = await fetch(apiUrl);
                            const data = await response.json();

                            if (response.ok) {
                            const weatherInfo = `
                <h2>Weather in ${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;

                            document.getElementById('weather-info').innerHTML = weatherInfo;
                        } else {
                            document.getElementById('weather-info').innerHTML = 'City not found.';
                        }
                        } catch (error) {
                            console.error('Error fetching data:', error);
                        }
                        });
