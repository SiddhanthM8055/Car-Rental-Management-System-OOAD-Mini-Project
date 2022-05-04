import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import './style.css';

export default function Landing(props) {
    const navigate = useNavigate();
    const [myName,setName] = useState('');
    const logoutHandler = () => {
      props.setId();
      navigate('/login');
    }
    const bookCarHandler = () => {
      navigate('/bookCars');
    }
    const myBookingHandler = () => {
      navigate('/myBookings');
    }
    const deleteHandler = () => {
      axios.get("http://localhost:8080/carrentals/deleteAccount/"+props.cur_id).then((res)=>{
        alert("Account Deleted Successfully");
        navigate('/signup');
      });
    }
    React.useEffect(() => {
        axios.get('http://localhost:8080/carrentals/getName/'+props.cur_id).then((response) => {
          setName(response.data.person.name);
        });
      });
  return (
    <div className='center'>
        <h1>Hello {myName}</h1>
        <br />
        <button onClick={bookCarHandler}><h2>Rent Car</h2></button>
        <br />
        <br />
        <button onClick={myBookingHandler}><h2>My reservations</h2></button>
        <br />
        <br />
        <button onClick={deleteHandler}><h2>Delete Account</h2></button>
        <br />
        <br />
        <button onClick={logoutHandler}><h2>Logout</h2></button>

    </div>
  )
}
