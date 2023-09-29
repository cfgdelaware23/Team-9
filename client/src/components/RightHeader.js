import React from 'react'
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom'

const RightHeader = () => {
  return (
    <rightHeader>
        <NavLink to = 'aboutus'>
            About Us
        </NavLink>
    </rightHeader>
  )
}

export default RightHeader