import React from 'react'

function ExtraInfo(props) {
    return (
        <div className="container text-center table-responsive-sm table-responsive-lg">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">wind_kph</th>
                        <th scope="col">wind_mph</th>
                        <th scope="col">wind_degree</th>
                        <th scope="col">wind_dir</th>
                        <th scope="col">pressure_mb</th>
                        <th scope="col">pressure_in</th>
                        <th scope="col">feelslike_c</th>
                        <th scope="col">feelslike_f</th>
                        <th scope="col">longitude</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.wind_kph}</td>
                        <td>{props.wind_mPh}</td>
                        <td>{props.wind_degree}</td>
                        <td>{props.wind_dir}</td>
                        <td>{props.pressure_mb}</td>
                        <td>{props.pressure_in}</td>
                        <td>{props.feelslike_c}</td>
                        <td>{props.feelslike_f}</td>
                        <td>{props.lon}</td>
                    </tr>
                </tbody>
            </table>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">wind_mph</th>
                        <th scope="col">cloud</th>
                        <th scope="col">gust_mph</th>
                        <th scope="col">gust_kph</th>
                        <th scope="col">heatindex_c</th>
                        <th scope="col">heatindex_f</th>
                        <th scope="col">precip_in</th>
                        <th scope="col">uv</th>
                        <th scope="col">latitude</th>
                        <th scope="col">localtime</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.wind_mPh}</td>
                        <td>{props.cloud}</td>
                        <td>{props.gust_mph}</td>
                        <td>{props.gust_kph}</td>
                        <td>{props.heatindex_c}</td>
                        <td>{props.heatindex_f}</td>
                        <td>{props.precip_in}</td>
                        <td>{props.uv}</td>
                        <td>{props.lat}</td>
                        <td>{props.localtime}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ExtraInfo
