$(() => {

////////////////////////////////////////////////////////////////////////////////////
// Global Variables
///////////////////////////////////////////////////////////////////////////////////

    const OPEN_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast';

    const div = document.querySelector('#insertWeather');

///////////////////////////////////////////////////////////////////////////////////
// Functions
///////////////////////////////////////////////////////////////////////////////////

    //function with url, initionalizing map
    function getWeatherURL(lat, lon) {
        return `${OPEN_WEATHER_URL}?lat=${lat}&lon=${lon}&units=imperial&appid=${OPEN_WEATHER_APPID}`;
    }

    mapboxgl.accessToken = MAPBOX_TOKEN;

    const map = new mapboxgl.Map({ // Create the map instance

        container: 'map',
        style: 'mapbox://styles/mapbox/navigation-night-v1',
        zoom: 10,
        center: [-98.4926, 29.4252],
    });

    map.addControl(new mapboxgl.NavigationControl());


// creation of marker
    const marker = new mapboxgl.Marker({
        color: 'red',
        draggable: true
    })
        .setLngLat([-98.4926, 29.4252])
        .addTo(map);

    marker.on('dragend', () => {
        return map;
    })

//generating the weather and giving it a div for the html
    function getWeatherData(lat, lon) {
        generateWeather = $.ajax(getWeatherURL(lat, lon)).done(data => {
            console.log(data)
            $('#insertWeather').html('');

            for (let i = 0; i < data.list.length; i += 8) {
                const weatherCard = $('<div></div>')
                weatherCard.html(`

                   <div class="sam-card">
                        <h3 class="text-center">${new Date(data.list[i].dt_txt).toLocaleDateString('en-US', { weekday: 'long' })}</h3>
                            <p class="min-temp text">LOW: ${data.list[i].main.temp_min}&deg;F</p>
                             <p class="max-temp text">HIGH: ${data.list[i].main.temp_max}&deg;F</p>
                            <p class="conditions text">Conditions: ${data.list[i].weather[0].description}</p>
                            <p class="humidity text">Humidity: ${data.list[i].main.humidity} %</p>
                            <p class="wind text">Wind: ${data.list[i].wind.speed} MPH</p>
                            <p class="pressure text">Pressure: ${data.list[i].main.pressure} hPa</p>
                   </div>

                `)
                console.log(weatherCard);
                $('#insertWeather').append(weatherCard);
            }
        })
    }

///////////////////////////////////////////////////////////////////////////////////
// Events
///////////////////////////////////////////////////////////////////////////////////

    //marker grabbing coords and feeding lat and long to map
    let coords = marker.getLngLat();
    getWeatherData(coords.lat, coords.lng);

    marker.on("dragend", function () {
        let coords = marker.getLngLat();
        getWeatherData(coords.lat, coords.lng);
    });

    const themeLink = document.createElement('link');
    themeLink.rel = 'stylesheet';
    themeLink.href = 'weather-map.css'; // Adjust the path to your actual CSS file for the light theme
    document.head.appendChild(themeLink);

    document.querySelector('.btn-switch').addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-bs-theme');
        if (currentTheme === 'dark') {
            document.documentElement.setAttribute('data-bs-theme', 'light');
            themeLink.href = 'path-to-light-theme.css';
        } else {
            document.documentElement.setAttribute('data-bs-theme', 'dark');
            themeLink.href = 'path-to-dark-theme.css';
        }
    });
///////////////////////////////////////////////////////////////////////////////////
// Run When App Loads
///////////////////////////////////////////////////////////////////////////////////

    //map zoom when it pops up
    map.setZoom(10);

///////////////////////////////////////////////////////////////////////////////////
// This is for testing
///////////////////////////////////////////////////////////////////////////////////


});

