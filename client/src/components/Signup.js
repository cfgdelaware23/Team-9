import React from 'react'
import '../css/Signup.css'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'

function Signup() {
  const navigate = useNavigate()
  function handleSignUp() {
    console.log("here")
    navigate('/signup')
    // This will route to application page
  }
  return (
    <div className='signup-container'>
        <Button variant="contained" size='large' color='primary'
        sx={{
            width: 800,
            height: 150
        }}
        style={{
            backgroundColor: "#21b6ae",
        }}
        onClick={() => {handleSignUp()}}
        >
        <div class = "affordable-container">
          <div class = "affordable-text">
            <div class = "s">S</div>
            <div class = "i">i</div>
            <div class = "g">g</div>
            <div class = "n">n</div>
            <div class = "u">U</div>
            <div class = "p">p</div>
            <div class = "h">H</div>
            <div class = "e1">e</div>
            <div class = "r">r</div>
            <div class = "e2">e</div>
            <div class = "exclamation">!</div>
          </div>
        </div>
        </Button>
        <div className = "moving-text-container">
          <div className="leftText">
            <h3>
              We Are...
            </h3>
          </div>
          <div className="rightText">
            <h3>
              Better Grocery
            </h3>
          </div>
        </div>
        
    </div>
    
  )
}

export default Signup