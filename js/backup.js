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

