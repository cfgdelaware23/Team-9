import React from 'react'
import '../css/ContentButtons.css'
import '../css/UserType.css'
import { useNavigate } from 'react-router-dom'

const UserType = () => {
    const navigate = useNavigate()
    return (
        <div classname='content'>
            <button 
                className="contentButton" 
                type="button" 
                onClick={(e) => {
                    e.preventDefault() 
                    navigate('/')
                }}
            >
                User
            </button>
            <button 
                className="contentButton" 
                type="button" 
                onClick={(e) => {
                    e.preventDefault()
                    navigate('/admin')}}
                >        
                Admin
            </button>
        </div>
    )
}

export default UserType