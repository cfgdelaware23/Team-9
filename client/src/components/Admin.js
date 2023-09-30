import { TextField, Button } from "@mui/material"
import { React, useState, useEffect } from 'react'
import AdminCheckout from './AdminCheckout'
import { Routes, Route, useNavigate } from 'react-router-dom'

const Admin = () => {
  const navigate = useNavigate()
  const [ memberID, setMemberID ] = useState()
  const [ fetchError, setFetchError ] = useState()
  const API_URL = `http://127.0.0.1:5000/user/${memberID}`
  const handleSubmitID = async(e) => {
    e.preventDefault();
    if (!memberID) return;
    try {
      const response = await fetch(API_URL)
      if (!response.ok) throw Error ('Did not receve expected data')
      const newID = await response.json().membership_id
      setMemberID(newID)
      setFetchError(null)
    } catch (err) {
      setFetchError(err.message)
    }
    setMemberID('');
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
            <Route path = 'checkout' element = {<AdminCheckout memberID = {memberID} />}/>
    </Routes>
    
  )
}

export default Admin