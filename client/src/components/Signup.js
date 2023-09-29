import React from 'react'
import '../css/Signup.css'
import Button from '@mui/material/Button';


function handleSignUp() {
    console.log("here")
    // This will route to application page
}
function Signup() {
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
        >Sign Up</Button>

    </div>
  )
}

export default Signup