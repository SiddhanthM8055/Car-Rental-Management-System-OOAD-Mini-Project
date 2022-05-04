import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import CheckIn from './CheckIn';
import CheckOut from './CheckOut';
import Landing from './Landing';
import Login from "./Login";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/landing' element={<Landing/>}/>
      <Route path='/checkIn' element={<CheckIn/>}/>
      <Route path='/checkOut' element={<CheckOut/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
