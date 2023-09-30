import { TextField, Button } from "@mui/material"
import { React, useState } from 'react'
import AdminCheckout from './AdminCheckout'
import Validate from './Validate'
import { Routes, Route, useNavigate } from 'react-router-dom'

const Admin = ({discount}) => {
  const navigate = useNavigate()
  const [id, setID] = useState()
  const handleSubmitID = async(e) => {
    e.prevendDefault()
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
                            value={id}
                            onChange={(e) => setID(e.target.value)}
                        />
                        <Button class='submitButton' type='submit' onClick={() => handleSubmitID()}>
                            Submit!
                        </Button>
                    </form>
                }/>
            <Route path = 'validate' element = {<Validate />}/>
    </Routes>
    
  )
}

export default Admin