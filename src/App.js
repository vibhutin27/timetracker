import React from 'react'
import Navbar from './components/navbar/Navbar';
import ShiftHours from './components/shiftHours/ShiftHours'
import {Footer, Header} from './containers';
import './app.css'
import Login from './components/login/Login';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
      </div>
      <Header/>
      <Login />
      <ShiftHours />
      <Footer/>
    </div>
  )
}

export default App