(()=>{

///////////////////////////////////////////////////////////////////////
//global variables
///////////////////////////////////////////////////////////////////////

const OPEN_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast';

const div = document.querySelector('#insertWeather');

const searchBar = document.querySelector('.search-bar');

///////////////////////////////////////////////////////////////////////
//functions
///////////////////////////////////////////////////////////////////////

function getWeather(lat, lon){
    return `${OPEN_WEATHER_URL}?lat=${lat}&lon=${lon}&units=imperial&appid=${OPEN_WEATHER_APPID}`; //the imperial units is for F i think
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


///////////////////////////////////////////////////////////////////////
//events
///////////////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////////////
//run when app loads
///////////////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////////////
//this is for testing
///////////////////////////////////////////////////////////////////////



});