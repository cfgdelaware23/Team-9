import { TextField, Button } from "@mui/material"
import { React, useState } from 'react'
import AdminCheckout from './AdminCheckout'
import CreateNewUser from "./CreateNewUser"
import { Routes, Route, useNavigate } from 'react-router-dom'

const Admin = () => {
  const navigate = useNavigate()
  const [ memberID, setMemberID ] = useState()
  const [ fetchError, setFetchError ] = useState()
  const [items, setItems] = useState([])
  
  const handleSubmitID = async(e) => {
    const API_URL = `http://127.0.0.1:5000/user/${memberID}`
    if (!memberID) return;
    try {
      const response = await fetch(API_URL)
      if (!response.ok) throw Error ('Did not receve expected data')
      const member = await response.json()
      setItems(member.purchase_history)
      console.log(items)
      setFetchError(null)
      navigate('checkout')
    } catch (err) {
      setFetchError(err.message)
      console.err(fetchError)
    }
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
        <div>
          <form>
              <TextField 
                  autoFocus
                  className='auth-form'
                  id='addText'
                  type='text'
                  placeholder='Membership ID here...'
                  required
                  onChange={(e) => { setMemberID(e.target.value)}}
              />
              <Button class='submitButton' type='submit' onClick={(e) =>{ e.preventDefault(); handleSubmitID()}}>
                  Submit!
              </Button>
                </form>
                <Button
                    class='submitButton'
                    type = 'submit'
                    onClick={(e) => {
                      e.preventDefault()
                      setMemberID('')
                      navigate('/admin/createnewuser')
                    }}
                  >
                    No Account? Click Here
                  </Button>
              </div>
            }/>
          <Route path = 'createnewuser' element ={<CreateNewUser/>}/>
          <Route path = 'checkout' element = {<AdminCheckout memberID = {memberID} items = {items} setItems={setItems} />}/>
  
    </Routes>
    
  )
}

export default Admin