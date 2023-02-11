import React, { useContext } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import {useState} from 'react'
import "../App.css"
import { AuthContext } from '../context/authContext';




const UserHome = () => {

    // const [values,userValues] = useState({
    //     username:"",
    //     userName: "",
    //     userAlias: "",
    //     userPhone: "",
    //     userEmail: "",
    //     userPoints: "",
    // });

        //for context
    const {currentUser} = useContext(AuthContext);
    // //if there is a current user, write the username

  return (
    <section>
                <div className='TopBar'>
                  <header>
                    <ul className='nav'>
                      <a href='/#'><img src='logo-no-background.png' className='logo' alt='logo'></img></a>
                      <li><a href='/#'>Home</a></li>
                      <li><a href='/#'>Points</a></li>
                      <li><a href='/#'>Catering</a></li>
                      <li><a href='/#'>Contact</a></li>
                      {/* <button onClick={this.infoToggle} className='MakeReservation'>Edit Account Information</button> */}
                      <button className='SignIn'>Points: {currentUser?.points}</button>
                      <button className='SignIn'>Sign Out</button>
                    </ul>
                  </header>
                </div>
                <div className='content'>
                    <div className="Welcome-form-container">
                        <div className="Welcome-form">
                            <h1>Welcome, {currentUser?.fullname}!</h1>
                            {/* {this.ifReservation()} */}
                            <div className="bottom-columns">
                                <div className="Welcome-left">
                                    <ul className="list">
                                        <li className="list-group-item active"><b>Account Information :</b></li>
                                        <li className="list-group-item"><b>Full Name :</b> {currentUser?.fullname}</li>
                                        <li className="list-group-item"><b>Account Name :</b> {currentUser?.username}</li>
                                        <li className="list-group-item"><b>Email :</b> {currentUser?.email}</li>
                                        <li className="list-group-item"><b>Phone : </b>{currentUser?.phone}</li>
                                    </ul>
                                </div>
                                <div className="Welcome-right ">
                                    <button className="btn btn-primary btn-sm"><Link to="/userReserve">Make Reservation</Link></button>
                                    {/* <button className="btn btn-primary btn-sm">Change Reservation</button> */}
                                    {/* <button onClick={() => this.cancelRes()} className="btn btn-primary btn-sm">Cancel Reservation</button> */}
                                    {/* <button onClick={this.infoToggle} className="btn btn-primary btn-sm">Edit Information</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='BottomBar'>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <ul className='sci'>
                  <li><a href='/#' className='fa fa-facebook'></a></li>
                  <li><a href='/#' className='fa fa-instagram'></a></li>
                  <li><a href='/#' className='fa fa-twitter'></a></li>
                </ul>
                </div>
              </section>
  )
}

export default UserHome