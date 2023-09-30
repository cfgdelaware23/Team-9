import { TextField, Button } from "@mui/material"
import { React, useState } from 'react'
import AdminCheckout from './AdminCheckout'
import Validate from './Validate'
import { Routes, Route, useNavigate } from 'react-router-dom'

const Admin = () => {
  const navigate = useNavigate()
  const [memberID, setMemberID] = useState()
  const handleSubmitID = async(e) => {
    // Put API Call here
  }
  return (
    <Routes>
            <Route 
                index
                element = {
                    <div className='content'>
                    <button
                        className='contentButton'
                        onClick={(e) => {
                        e.preventDefault()
                        navigate('checkout')
                        }}
                    >
                    Guest Checkout
                    </button>
                    <button
                        className='contentButton'
                        onClick={(e) => {
                        e.preventDefault()
                        navigate('/admin/validate')
                        }}
                    >
                    Member Checkout
                    </button>
                    </div>
                } 
            />
            <Route 
                path='validate' 
                element={
                    <form>
                        <TextField 
                            autoFocus
                            className='auth-form'
                            id='addText'
                            type='text'
                            placeholder='Membership ID here...'
                            required
                            value={memberID}
                            onChange={(e) => setMemberID(e.target.value)}
                        />
                        <Button class='submitButton' type='submit' onClick={() => handleSubmitID()}>
                            Submit!
                        </Button>
                    </form>
                }/>
            <Route path = 'validate' element = {<Validate />}/>
            <Route path = 'checkout' element = {<AdminCheckout memberID = {memberID} />}/>
    </Routes>
    
  )
}

export default Admin