import "../App.css"
import { useContext } from 'react'
import React from 'react'
import { useState } from "react";
import FormInput from "./FormInput";

const GuestReserve = () => {

    //const {currentUser} = useContext(AuthContext);

    const[availT, setAvail] = useState()

    const[values, setValues] = useState({
        fullname:"",
        email:"",
        date:"",
        time:"",
        phone:"",
        guests:"",
        tableName:"",
        hasReserations:"true"
    });

    const inputs = [
        {
            id:1,
            name:"fullname",
            type:"text",
            placeholder:"Full Name",
            errorMessage:"Must include your name.",
            label:"Name",
            pattern: "^[A-Za-z0-9]{3,16}$", //js regex code
            required: true
        },
        {
            id:2,
            name:"email",
            type:"email",
            placeholder:"email",
            errorMessage:"Should be a valid email adresss",
            label:"Email",
            required: true
        },
        {
            id:3,
            name:"phone",
            type:"number",
            placeholder:"Phone Number",
            errorMessage:"Not a valid phone number.",
            pattern:"/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g",
            label:"Phone Number",
            required: true
        },
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
            placeholder:"Time",
            //errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character.",
            label:"Time",
            //pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$',
            required: true
        },
        {
            id:6,
            name:"guests",
            type:"number",
            placeholder:"Number of Guests",
            errorMessage:"Must have at least one Guest",
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

    const handleSubmit = async e => {
        e.preventDefault();
        try{
           let res = await axios.post("/reservations/add",values)
            //let res = await axios.get("/reservations/checkRes",values)
            setAvail(res.data)
            console.log(res.data)
            console.log(availT)
            if(availT === true)
            {
                console.log("No resevation available")
            }
            else
            {
                console.log("It is available")
            }
        }catch(err){
            console.log(err)
        }
    };
 
    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
        let special = isWeekend();
    }

    //console.log(values);sdf
    return <div className = "GuestReserve">
        <form onSubmit={handleSubmit}>
        <h1>Reserve a Table</h1>
            {inputs.map(input=>(
            <FormInput key = {input.id} {...input} value= {values[input.name]} onChange={onChange}/>
            ))}
            <button type="submit">Submit</button>
            {/* {isWeekend()? alert("You are choosing a high traffic day. A hold fee is required") : <span>goodbye</span>} */}
            {/* <h1>{values.birthday}</h1> */}
        </form>
        {/* {isWeekend} */}

    </div>
};

export default GuestReserve;