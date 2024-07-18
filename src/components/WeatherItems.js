import React from 'react'

function WeatherItems(props) {
    return (
        <div className="imgCon">
            <div className="card text-bg-dark" style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                <img style={{ height: "29rem", objectFit: "cover" }} src="https://wallpapers.com/images/featured/black-clouds-background-87utstxo0bgqdgh8.jpg" className="card-img" alt="..." />
                <div className="card-img-overlay" style={{ color: "white" }}>
                    <h4 className="card-title mb-3">Weather</h4>
                    <p className="card-text">{`${props.tempC}`}<sup><span style={{ fontSize: "x-small" }}>o</span></sup>C / {`${props.tempF}`}<sup><span style={{ fontSize: "x-small" }}>o</span></sup>F</p>
                    <p className="card-text">Last updated on {`${props.lastUpdated}`}</p>
                    <p className="list-group-item">Humidity: {props.humidity}</p>
                    <p className="list-group-item">Condition: {props.condition}
                        <img height={35} width={35} src={props.sky} alt="" />
                    </p>
                    <p className="list-group-item">Precipitation: {props.precip_mm} mm</p>
                    <p className="list-group-item">Name: {props.name}</p>
                    <p className="list-group-item">Region: {props.region}</p>
                    <p className="list-group-item">Country: {props.country}</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherItems
