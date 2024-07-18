import React from 'react'
import Weather from './components/Weather'
import { useState } from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ForecastContainer from './components/ForecastContainer'
function App() {
  const [region, setRegion] = useState("Daman")
  const [search, setSearch] = useState("")
  document.body.style.color = "cornsilk"
  return (
    <div>
      <BrowserRouter>
        <Navbar search={search} setRegion={setRegion} setSearch={setSearch} />
        <Routes>
          <Route exact path="Krishna-Dehrawala-s-Weather-App" element={<Weather region={region} />} />
          <Route exact path="10Days" element={<ForecastContainer region={region} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App