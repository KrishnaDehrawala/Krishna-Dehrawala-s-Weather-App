import React from 'react'
import Weather from './components/Weather'
// import { useEffect } from 'react'
import { useState } from 'react'
import "./App.css"
function App() {
  const [region, setRegion] = useState("Daman")
  const [search, setSearch] = useState("")
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Krishna's Weather</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Home</a>
              </li>
            </ul>
          </div> */}
          <form className="d-flex" role="search" onSubmit={(evt) => {
            evt.preventDefault()
            let inputRegion = document.querySelector(".inputRegion")
            setRegion(inputRegion.value)
          }}>
            <input className="form-control me-2 inputRegion" type="search" placeholder="Search" aria-label="Search" onChange={(evt) => { setSearch(evt.target.value) }} />
            <button className="btn btn-outline-success" type="submit" disabled={search == ""}>Search</button>
          </form>
        </div>
      </nav>
      <Weather region={region} />
    </div>
  )
}

export default App


// onChange={(evt) => { setRegion(evt.target.value) }}