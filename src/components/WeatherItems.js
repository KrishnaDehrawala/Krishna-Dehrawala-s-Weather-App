import React from 'react'

function WeatherItems(props) {
    return (
        <div className="imgCon">
            <div className="card text-bg-dark">
                <img height={500} width={500} src="https://www.noaa.gov/sites/default/files/styles/landscape_width_1275/public/legacy/image/2019/Jun/iStock-477110708%20(1).jpg?itok=wCLnw6I9" className="card-img" alt="..." />
                <div className="card-img-overlay">
                    <h5 className="card-title mb-3">Weather</h5>
                    <p className="card-text">{`${props.tempC}`}<sup><span style={{ fontSize: "x-small" }}>o</span></sup>C / {`${props.tempF}`}<sup><span style={{ fontSize: "x-small" }}>o</span></sup>F</p>
                    <p className="card-text">Last updated on {`${props.lastUpdated}`}</p>
                    <p className="list-group-item">Humidity: {props.humidity}</p>
                    <p className="list-group-item">{props.condition}
                        <img height={35} width={35} src={props.sky} alt="" />
                    </p>
                    <p className="list-group-item">Precipitation: {props.precip_mm} mm</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherItems
