import React from 'react'
import DonationHeader from './DonationHeader'
import '../css/HeaderButtons.css'

const RightHeader = () => {
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
    </div>
  )
}

export default RightHeader