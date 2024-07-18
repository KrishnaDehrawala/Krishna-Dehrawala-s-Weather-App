import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import ForecastItem from './ForecastItem'
function ForecastContainer(props) {
    const [forecast10, setForecast10] = useState(null)
    useEffect(() => {
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=7daaf017d75a4bfab7f82204241707&q=${props.region}&days=12&aqi=no&alerts=no`).then((response) => {
            return response.json()
        }).then((data) => {
            setForecast10(data)
        }).catch((err) => {
            console.log(err)
        })
    })
    return (
        <div className="container">
            <div className="row justify-content-center">
                {forecast10 && (forecast10.forecast.forecastday).map((element) => {
                    return <ForecastItem
                        date={element.date}
                        avgtemp_c={element.day.avgtemp_c}
                        avgtemp_f={element.day.avgtemp_f}
                        conditionText={element.day.condition.text}
                        conditionIcon={element.day.condition.icon}
                        avghumidity={element.day.avghumidity}
                        daily_chance_of_rain={element.day.daily_chance_of_rain}
                        daily_chance_of_snow={element.day.daily_chance_of_snow}
                    />
                })}
            </div>
        </div>
    )
}

export default ForecastContainer