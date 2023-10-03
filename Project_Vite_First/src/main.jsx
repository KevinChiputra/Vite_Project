import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './Components/Navbar.jsx'
import Home from './Components/Home'
import AboutUs from './Components/AboutUs'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <AboutUs />
  </React.StrictMode>,
)
