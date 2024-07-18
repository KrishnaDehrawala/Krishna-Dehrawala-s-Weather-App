import React from 'react'

function ForecastItem(props) {
    return (
        <div className="card bg-dark text-white col-md-4 mx-1 my-1" style={{ width: "27rem", padding: "0px" }}>
            <img src="https://wallpapers.com/images/featured/black-clouds-background-87utstxo0bgqdgh8.jpg" className="card-img" alt="..." />
            <div className="card-img-overlay">
                <h5 className="card-title">Date: {props.date}</h5>
                <p className="card-text">Average Temperature: {props.avgtemp_c}<sup>o</sup>C / {props.avgtemp_f}<sup>o</sup>F</p>
                <p className="card-text">Condition: {props.conditionText} <img height={30} width={30} src={props.conditionIcon} alt="..." /></p>
                <p className="card-text">Average Humildity: {props.avghumidity}</p>
                <p className="card-text">Rain possibility: {props.daily_chance_of_rain}%</p>
                <p className="card-text">Snow possibility: {props.daily_chance_of_snow}%</p>
            </div>
        </div>
    )
}

export default ForecastItem
