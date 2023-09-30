import { React, useState, useEffect } from 'react'
import ListItem from './ListItem'
import { Button, TextField } from '@mui/material'
import '../css/AdminCheckout.css'

const AdminCheckout = ({memberID, items, setItems}) => {
  const {format} = require('date-fns')
  const [currItem, setCurrItem] = useState('')
  const [currSession, setCurrSession] = useState([])
  const dateTime = `${format(new Date(), 'MM/dd/yyyy\tHH:mm:ss')}`

  const handleSubmitCurrItem = async(e) => {
    const newItem = {item: currItem, total: 100}
    setItems([...items, newItem])
    setCurrSession([...currSession, newItem])
    const API_URL = `http://127.0.0.1:5000/add_purchase/${memberID}`
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "item": currItem,
      "total": 100,
      "user_id": memberID
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(API_URL, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  

  return (

    <div className='admin-checkout'>

      <div class = "scan">
        Scan
        <form>
          <TextField 
            autoFocus
            className='auth-form'
            id='addText'
            type='text'
            placeholder='Item here...'
            required
            onChange={(e) => { setCurrItem(e.target.value)}}
          />
          <Button class='submitButton' type='submit' onClick={(e) =>{e.preventDefault(); handleSubmitCurrItem()}}>
              Submit!
          </Button>

        </form>
      </div>
      
      <div class = "main">
         {items.length ? (
            <ListItem items = {items}/>
         ) : (
            <p style = {{marginTop: '2rem'}}> </p>
         )}
      </div> 
      <div class = "sidebar"> 
        <div> 
          {dateTime} 
        </div>
        <div>
          {items.length ? (
              <ListItem items = {currSession}/>
          ) : (
              <p style = {{marginTop: '2rem'}}> </p>
          )}
        </div>

      
      </div>
    </div>
  )
}


export default AdminCheckout