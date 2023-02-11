import React, { Component } from 'react';
//import editInfo from './editInfo'
import '../App.css';
import Auth from "./Auth";
import {Link} from "react-router-dom";
import {AuthContext } from "../context/authContext"


class Welcome extends Component {
    state = {
        userName: "Benito Georgio",
        userAlias: "Username",
        userPhone: 97220837823,
        userEmail: "email@email.com",
        userPoints: 20,
        editInfo: true,
        userReservation:
        {
            res: true,
            rDate: "5/15/1983",
            rtime: "2:03 pm",
            rGuests: 25,
            rLocation: "Houston"
        },
    };

    //for context
    // const {lcurrentUser} = useContext(AuthContext);
    // //if there is a current user, write the username
    // <span>{currentUser?.userName}</span>

    getName = (evt) => {
        const val = evt.target.value;
        this.setState({ userName: val });
    }

    getEmail = (evt) => {
        const val = evt.target.value;
        this.setState({ userEmail: val });
    }

    getPhone = (evt) => {
        const val = evt.target.value;
        this.setState({ userPhone: val });
    }

    handleSubmit = (e) => {  //e is the event object

    }

    ifReservation() {
        const { userReservation } = this.state;
        if (userReservation.res === true) return <h4>
            You have a reservation for {userReservation.rGuests} guests on {userReservation.rDate} at {userReservation.rtime}.
        </h4>
        return <h4>You have no current reservations.</h4>
    };

    cancelRes = () => {
        this.setState({ res: false });
        this.ifReservation();
    }

    displayInformation() {
        return (
            <ul className="list-group list-group-flush">
                <li className="list-group-item active">Account Information: <span className="link-primary" onClick={this.infoToggle}>
                    Sign Up
                </span></li>
                <li className="list-group-item">Full Name : {this.state.userName}</li>
                <li className="list-group-item">Account Name : {this.state.userAlias}</li>
                <li className="list-group-item">Email : {this.state.userEmail}</li>
                <li className="list-group-item">Phone : {this.state.userPhone}</li>
            </ul>);
    };

    infoToggle = () => {
        const toDisplay = this.state.editInfo;
        this.setState({ editInfo: !toDisplay })
    };

    handleSumbit = (e) => {
        e.preventDefault();
    }
    // cancelRes() {

    // };

    render() {

        const myStyle = {
            backgroundImage:
                "url('https://media.timeout.com/images/101898433/750/422/image.jpg')",

            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }
        if (this.state.editInfo === true) {
            return (
                <section>
                <div className='TopBar'>
                  <header>
                    <ul className='nav'>
                    <img src={require('./assets/logo-no-background.png')} className='logo' alt='logo'></img>
                      <li><a href='/#'>Group Reservations</a></li>
                      <li><a href='/#'>Points</a></li>
                      <li><a href='/#'>Catering</a></li>
                      <li><a href='/#'>Contact</a></li>
                      <button onClick={this.infoToggle} className='MakeReservation'>Edit Account Information</button>
                      <button className='SignIn'>Points: {this.state.userPoints}</button>
                      <button className='SignIn'>Sign Out</button>
                    </ul>
                  </header>
                </div>
                <div className='content'>
                    <div className="Welcome-form-container">
                        <div className="Welcome-form">
                            {/* <button onClick={this.infoToggle} className="badge m-2 bg-primary">Edit Info</button>
                            <button className="badge m-2 bg-primary">Points: {this.state.userPoints}</button> */}
                            <h1>Welcome, {this.state.userName}!</h1>
                            {this.ifReservation()}
                            <div className="bottom-columns">
                                <div className="Welcome-left">
                                    <ul className="list">
                                        <li className="list-group-item active"><b>Account Information :</b></li>
                                        <li className="list-group-item"><b>Full Name :</b> {this.state.userName}</li>
                                        <li className="list-group-item"><b>Account Name :</b> {this.state.userAlias}</li>
                                        <li className="list-group-item"><b>Email :</b> {this.state.userEmail}</li>
                                        <li className="list-group-item"><b>Phone : </b>{this.state.userPhone}</li>
                                    </ul>
                                </div>
                                <div className="Welcome-right ">
                                    <button onClick={this.infoToggle} className="btn btn-primary btn-sm">Make Reservation</button>
                                    <button className="btn btn-primary btn-sm">Change Reservation</button>
                                    <button onClick={() => this.cancelRes()} className="btn btn-primary btn-sm">Cancel Reservation</button>
                                    {/* <button onClick={this.infoToggle} className="btn btn-primary btn-sm">Edit Information</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='textBox'>
                        <h1>Welcome To NowReserve</h1>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button className='btnReservation'>Make Reservation</button>
                    </div> */}
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
                
            );
        }
        if (this.state.editInfo === false) {
            return (
                <div className="Auth-form-container">
                    <form className="Auth-form">
                        <div className="Auth-form-content">
                            <h3 className="Auth-form-title">Edit Information</h3>
                            <div className="form-group mt-3">
                                <label>Name:</label>
                                    <input
                                        type="name"
                                        classNAme="form-control mt-1"
                                        name="userName"
                                        placeholder={this.state.userName}
                                        onChange={evt => this.getName(evt)}
                                    />
                            </div>
                            <div className="form-group mt-3">
                                <label>Email:</label>
                                    <input
                                        type="text"
                                        name="userEmail"
                                        classNAme="form-control mt-1"
                                        placeholder={this.state.userEmail}
                                        onChange={evt => this.getEmail(evt)}
                                    />
                            </div>
                            <div className="form-group mt-3">
                                <label>Phone:</label>
                                    <input
                                        type="number"
                                        name="userPhone"
                                        classNAme="form-control mt-1"
                                        placeholder={this.state.userPhone}
                                        onChange={evt => this.getPhone(evt)}
                                    />
                            </div>
                            <button onClick={this.infoToggle}>Confirm</button>
                        </div>
                    </form>
                </div>

            );

        }



    }
}

export default Welcome;
