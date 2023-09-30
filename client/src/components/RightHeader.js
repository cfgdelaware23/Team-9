import React from 'react'
import DonationHeader from './DonationHeader'
import {useNavigate} from 'react-router-dom'
import '../css/HeaderButtons.css'

const RightHeader = () => {
  const navigate = useNavigate()
  return (
    <div className="rightHeader">
        <button 
          className="headerButton" 
          type="button" 
          onClick={(e) => {e.preventDefault() 
          window.location.replace("/#aboutus")}}>
            About Us
        </button>
        <button 
          className="headerButton" 
          type="button" 
          onClick={(e) => {e.preventDefault()
          window.location.replace("/#feedbackForm")}}>
            Feedback!
        </button>
        <DonationHeader/>
        <button 
          className="headerButton" 
          type="button" 
          onClick={(e) => {e.preventDefault()
          navigate('/usertype')}}>
            Admin
        </button>
    </div>
  )
}

export default RightHeader