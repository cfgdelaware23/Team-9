import { React, useState, useEffect } from 'react'
import ListItem from './ListItem'
import '../css/AdminCheckout.css'


const AdminCheckout = ({memberID}) => {
  const API_URL = `http://127.0.0.1:5000/user/${memberID}`
  const {format} = require('date-fns')
  const [items, setItems] = useState([])
  const [fetchError, setFetchError] = useState("")
  const dateTime = `${format(new Date(), 'MM/dd/yyyy\tHH:mm:ss')}`

  useEffect(() => {
    const fetchItems = async() => {
      try {
        const response = await fetch(API_URL)
        if (!response.ok) throw Error ('Did not receve expected data')
        const listItems = await response.json().purchase_history
        setItems(listItems)
        setFetchError(null)
      } catch (err) {
        setFetchError(err.message)
      }
    } 
    fetchItems()
  }, [])

  return (
    <div className='admin-checkout'>
        Placeholder
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
      
      </div>
    </div>
  )
}


export default AdminCheckout