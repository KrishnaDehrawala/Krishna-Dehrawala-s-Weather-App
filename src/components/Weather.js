import React, { useEffect } from "react";
import { useState } from "react";
import WeatherItems from "./WeatherItems";
import ExtraInfo from "./ExtraInfo";
function Weather(props) {
    const [weather, setWeather] = useState(null)
    useEffect(() => {
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=7daaf017d75a4bfab7f82204241707&q=${props.region}&days=1&aqi=no&alerts=no`).then((response) => {
            return response.json()
        }).then((data) => {
            setWeather(data)
        }).catch((err) => {
            console.log(err)
        })
    })
    return (
        <div>
            {weather && <div>
                <div className="d-flex justify-content-around my-5">
                    <WeatherItems
                        tempC={weather.current.temp_c}
                        tempF={weather.current.temp_f}
                        lastUpdated={weather.current.last_updated}
                        humidity={weather.current.humidity}
                        condition={weather.current.condition.text}
                        sky={weather.current.condition.icon}
                        precip_mm={weather.current.precip_mm}
                    />

                </div>
                <ExtraInfo wind_mph={weather.current.wind_mph}
                    wind_kph={weather.current.wind_kph}
                    wind_mPh={weather.current.wind_mph}
                    wind_degree={weather.current.wind_dir}
                    wind_dir={weather.current.wind_dir}
                    pressure_mb={weather.current.pressure_mb}
                    pressure_in={weather.current.pressure_in}
                    feelslike_c={weather.current.feelslike_c}
                    feelslike_f={weather.current.feelslike_f}
                    cloud={weather.current.cloud}
                    uv={weather.current.uv}
                    gust_mph={weather.current.gust_mph}
                    gust_kph={weather.current.gust_kph}
                    heatindex_c={weather.current.heatindex_c}
                    heatindex_f={weather.current.heatindex_f}
                    precip_in={weather.current.precip_in}
                    lat={weather.location.lat}
                    lon={weather.location.lon}
                    localtime={weather.location.localtime}
                />
            </div>}
        </div>
    )
}

export default Weather
