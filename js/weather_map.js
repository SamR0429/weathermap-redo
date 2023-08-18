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
                     <p class="date">${data.list[i].dt_txt.split(' ')[0]}</p>
                     <br>
                     <p class="min-temp">LOW: ${data.list[i].main.temp_min}&deg;F</p>
                     <hr>
                     <p class="max-temp">HIGH: ${data.list[i].main.temp_max}&deg;F</p>
                     <hr>
                     <p class="conditions">Conditions: ${data.list[i].weather[0].description}</p>
                     <hr>
                     <p class="humidity">Humidity: ${data.list[i].main.humidity} %</p>
                     <hr>
                     <p class="wind">Wind: ${data.list[i].wind.speed} MPH</p>
                     <hr>
                     <p class="pressure">Pressure: ${data.list[i].main.pressure} hPa</p>
                     <br>
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
    })


///////////////////////////////////////////////////////////////////////////////////
// Run When App Loads
///////////////////////////////////////////////////////////////////////////////////

  //map zoom when it pops up
    map.setZoom(10);

///////////////////////////////////////////////////////////////////////////////////
// This is for testing
///////////////////////////////////////////////////////////////////////////////////


});
