import "../App.css"
import React, { useState } from "react";
import FormInput from "./FormInput";
import Modal from "../Pages/Modal";

import { AuthContext } from '../context/authContext';

const UserReserve = () => {
    const [show, setShow] = useState(false);

    const[values, setValues] = useState({
        fullname:"",
        email:"",
        date:"",
        time:"",
        phone:"",
        guests:""
    });
    
    const inputs = [
        {
            id:4,
            name:"date",
            type:"date",
            placeholder:"date",
            errorMessage:"",
            label:"Date",
        },
        {
            id:5,
            name:"time",
            type:"time",
            min:"5:00",
            step:"120000",
            placeholder:"Time",
            //errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character.",
            label:"Time",
            pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
            required: true
        },
        {
            id:6,
            name:"guests",
            type:"number",
            placeholder:"Number of Guests",
            errorMessage:"Number of Guests is Required",
            label:"Number of Guests",
            pattern: "^[1-9][0-9]*$",
            required: true
        }
    ]

    const isWeekend = (e) => {
        const date = values.date;
        const date2 = date.toString();
        const moDa = date2.substring(5,)
        let weekday = new Date(date2);
        let is_Weekend = false;
        let is_Holiday = false;

        const holidays = [
            "01-01",
            "01-16",
            "02-14", 
            "02-20",
            "04-07",
            "05-29",
            "11-10",
            "11-04",
            "12-24"
        ]

        for(let i = 0; i < holidays.length; i++) {
            if(moDa === holidays[i])
            {
                console.log("is holiday")
                is_Holiday = true;
            }
        }

        if(weekday.getDay() === 5 || weekday.getDay() === 6) 
        {
            is_Weekend = true;
        }

        if(is_Weekend === true || is_Holiday === true)
        {
            return true
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    };

  

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    }


    console.log(values);
    return <div className = "GuestReserve">
        <form onSubmit={handleSubmit}>
        <h1>Reserve a Table</h1>
            {inputs.map(input=>(
            <FormInput key = {input.id} {...input} value= {values[input.name]} onChange={onChange}/>
            ))}
            <button type="submit" onClick={() => setShow(true)}>Submit</button>
            {isWeekend()?<span><Modal className='Guest Modal' title="This is a high traffic day" onClose={() => setShow(false)} show={show}>
                <p className="ModalMessage">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </Modal></span> : <span>Goobye</span>}
            {/* <h1>{values.birthday}</h1> */}
        </form>

    </div>
};

  export default UserReserve;
