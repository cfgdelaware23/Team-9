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
            width: 300,
            height: 75
        }}
        style={{
            backgroundColor: "#21b6ae",
        }}
        onClick={() => {handleSignUp()}}
        >Sign Up for Discounts</Button>

    </div>
  )
}

export default Signup