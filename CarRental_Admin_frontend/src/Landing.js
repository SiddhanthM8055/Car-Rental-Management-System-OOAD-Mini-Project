import React from 'react'
import { useNavigate } from 'react-router';

export default function Landing() {
    const navigate = useNavigate();
    const checkInHandler = () => {
        navigate('/checkIn');
    }
    const checkOutHandler = () => {
        navigate('/checkOut');
    }
  return (
    <div>
        <div className='center'>
        <br/>
        <br />
        <button onClick={checkInHandler}><h2>Check In Car</h2></button>
        <br />
        <br />
        <button onClick={checkOutHandler}><h2>Check Out Car</h2></button>
        <br />
        <br />
    </div>
    </div>
  )
}
