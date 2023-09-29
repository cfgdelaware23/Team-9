import React from 'react'
import FeedbackForm from './FeedbackForm';
import {BrowserRouter as Router, Routes, Route, NavLink, Link} from 'react-router-dom'

const RightHeader = () => {
  return (
    <rightHeader>
        <NavLink to = 'aboutus'>
            About Us
        </NavLink>
        <Link to='/#feedbackForm'> Here </Link>
    </rightHeader> 
  )
}

export default RightHeader