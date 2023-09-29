import React from 'react'
import {BrowserRouter as Router, Routes, Route, NavLink, Link} from 'react-router-dom'
import '../css/HeaderButtons.css'

const RightHeader = () => {
  return (
    <rightHeader>
        <headerButton onClick={(e) => {e.preventDefault(); window.location.replace("/#aboutus")}}>
            About Us
        </headerButton>
        <headerButton onClick={(e) => {e.preventDefault(); window.location.replace("/#feedbackForm")}}>
            Feedback!
        </headerButton>
    </rightHeader>
  )
}

export default RightHeader