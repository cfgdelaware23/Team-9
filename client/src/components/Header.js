import React from 'react'
import AboutUs from './Aboutus'
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <img src = '../wellfareLogo.png' alt = "Wellfare Logo"/>
            <NavLink to = 'aboutus'>
                About Us
            </NavLink>
        </header>
  )
}

export default Header