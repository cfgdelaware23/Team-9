import { React, useState, useEffect } from 'react'
import ListItem from './ListItem'
import { Button, TextField } from '@mui/material'
import {useNavigate} from 'react-router-dom'
import '../css/AdminCheckout.css'

const AdminCheckout = ({memberID, items, setItems}) => {
  const {format} = require('date-fns')
  const [currItem, setCurrItem] = useState('')
  const [currSum, setCurrSum] = useState(0)
  const [currSession, setCurrSession] = useState([])
  const dateTime = `${format(new Date(), 'MM/dd/yyyy\tHH:mm:ss')}`
  const navigate = useNavigate()

  const handleSubmitCurrItem = async(e) => {
    const newItem = {item: currItem, total: 100}
    setCurrSum(currSum+newItem.total)
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

  const handleDeleteCurrItem = async(e) => {
    const API_URL = "http://127.0.0.1:5000/delete_last_purchase/800172"
    
    if (items.length !== 0) {
      var newItems = []
      for (var i = 0; i < items.length - 1; i++) {
        newItems.push(items[i])
      }
      setItems(newItems)
    }
    if (currSession.length !== 0) {
      var newSession = []
      for (var j = 0; j < currSession.length - 1; j++) {
        newSession.push(currSession[i])
      }
      setCurrSession(newSession)
    }
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      redirect: 'follow'
    }

    fetch(API_URL, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error))
  }

  return (

    <div className='admin-checkout'>

      <div class = "scan">
        <form>
          <TextField 
            autoFocus
            className='itemForm'
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
          <Button class='submitButton' type='submit' onClick={(e) =>{e.preventDefault(); handleDeleteCurrItem()}}>
              Delete Last Added Item
          </Button>
          <Button class='submitButton' type='submit' onClick={(e) =>{e.preventDefault(); navigate('/usertype')}}>
              Go to Checkout
          </Button>
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
          Current Total: ${currSum}
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