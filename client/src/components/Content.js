import React from 'react'
import Landing from './Landing'
import Application from './Application'
import { Route, Routes} from 'react-router-dom'

const Content = () => {
  return (
    <div className='content'>
      <Routes>
        <Route path = '/'>
          <Route index element = {<Landing />}/>
          <Route path = '/signup' element = {<Application />} />
        </Route>
      </Routes>
      
      
      
    </div>
  )
}
export default Content