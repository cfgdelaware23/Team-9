import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/ContentButtons.css'

const AdminLanding = () => {
    const navigate = useNavigate()
    const [discount, setDiscount] = useState(1);
    return (
        <div className='content'>
            <button
                className='contentButton'
                onClick={(e) => {
                e.preventDefault('/checkout')
                navigate('/checkout')
                }}
            >
            Guest Checkout
            </button>
            <button
                className='contentButton'
                onClick={(e) => {
                e.preventDefault()
                navigate('/checkout')
                }}
            >
            Member Checkout
            </button>
        </div>
    )
}
    
    
export default AdminLanding