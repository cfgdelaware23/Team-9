import React from 'react'
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom'

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