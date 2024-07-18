import React from 'react'
import { Link } from 'react-router-dom'
function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-1">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/Krishna-Dehrawala-s-Weather-App">Krishna's Weather-App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/Krishna-Dehrawala-s-Weather-App">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/10Days">Forecast</Link>
                            </li>
                        </ul>
                    </div>
                    <form className="d-flex" role="search" onSubmit={(evt) => {
                        evt.preventDefault()
                        let inputRegion = document.querySelector(".inputRegion")
                        props.setRegion(inputRegion.value)
                    }}>
                        <input className="form-control me-2 inputRegion" type="search" placeholder="Search" aria-label="Search" onChange={(evt) => { props.setSearch(evt.target.value) }} />
                        <button className="btn btn-outline-light" type="submit" disabled={props.search === ""}>Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
