import React, { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import '../App.css';

function Confirmation() {
  const { currentUser } = useContext(AuthContext);

  const[values, setValues] = useState({
    fullName:"",
    email:"",
    date:"",
    time:"",
    phoneNumber:"",
    numGuests:""
});

  const [goToSignIn, setGoToSignIn] = useState(false);
  
  if(goToSignIn){
    return <Navigate to="/Login"/>;
  }

  return (
    <section>
      <div className='TopBar'>
        <header>
          <ul className='nav'>
            <img src={require('./assets/logo-no-background.png')} className='logo' alt='logo'></img>
            <li><a href='/#'>Home</a></li>
            <li><a href='/#'>Points</a></li>
            <li><a href='/#'>Catering</a></li>
            <li><a href='/#'>Contact</a></li>
            <button className='SignIn' onClick={() => setGoToSignIn(true)}>Sign In</button>
          </ul>
        </header>
      </div>
      <div className='ThankYou'>
        <h1>Thank you, {values.fullName}</h1>
        <p>You'll receive an email confirmation soon.</p>
      </div>
      <div className='Confirmation-content'>
      <form className='Confirmation-form-container'>
        <h3 className='Date-confirmation'>Date: {values.date}</h3>
        <h3 className='Time-confirmation'>Time: {values.time}</h3>
        <h3 className='NumberOfGuestConfirmation'>Phone Number: {values.phoneNumber}
        </h3>
        <h3 className='NumberOfGuestConfirmation'>Number Of Guest: {values.numGuests}
        </h3>
        <h4 className='Disclaimer'>High Traffic Day Disclaimer:</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.</p>
      </form>
      </div>

    </section>
  )
}

export default Confirmation