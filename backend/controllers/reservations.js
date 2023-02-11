import { db } from "../db.js";
import { register } from "./authen.js";
import jwt from "jsonwebtoken";


export const checkRes = (req,res) =>{
    const q = "SELECT tableName FROM reservations WHERE date = ? AND time = ?"
    db.query(q,[req.body.date,req.body.time],(err,data1)=>{
        //console.log(data1) //displays data1
        
        let no_Reservations = false;
        //if no reservations on this day/time, so all Tables are available
        if (data1.length !== 0)
        {
            console.log("Found othe resetvations")
           no_Reservations = true;
        };


        //There are reservations for this time, so grab them
        const tableT = "SELECT * FROM table_tracker"
        db.query(tableT,(err,data2)=>{
            console.log(data2)
            if(no_Reservations === true)
            {
                for(let i = 0; i < data1.length; i++)
                {
                    //iterates through list of tables on Hand
                    for (let j = 0; j < data2.length;j++)
                    {
                        //if tables same name decreament on_Hand

                        // let test = data1[i].table_name
                        // let numCom = test.split(",").length-1
                        // let test = parseInt(data1[i].table_name)
                        // console.log(test)

                        if(data1[i].table_name === data2[j].table_name)
                        {
                            console.log("decremint")
                            data2[j].on_Hand = data2[j].on_Hand - 1
                        }
                    } 
                }
            }

            let Avail = false;
            let table_types = [];
            console.log("test")
            console.log(req.body.guests)
            //iterates through list of tables on Hand
            for (let i= 0; i < data2.length;i++)
            {
                // console.log("We checking")
                //Check if we have table and equal to or greater than party
                if(data2[i].on_Hand !== 0 && data2[i].table_size >= req.body.guests)
                {
                    table_types.push(data2[i].table_name)
                    Avail = true;
                    console.log("Avail is true")
                }
            } 
            console.log("hello")
            console.log(Avail)
            var combo = false;
            var total = 0;
            var numGuests = req.body.guests
            //if there is nothing available, try a combination
            if(Avail === false)
            {
                //look through every table type
                for(var i = 0; i < data2.length; i++)
                {
                    //add available tables until it meets or exceedes number of guests
                    for(var j = 0; j< data2[i].on_Hand; j++){
                        if(total < numGuests){
                            console.log("Adding to total")
                            total = total + data2[i].table_size
                            data2[j].on_Hand = data2[j].on_Hand - 1
                            table_types.push(data2[i].table_name)
                        }
                    }
                    if(total>=numGuests)
                    {
                        console.log("We found combo")
                        combo = true;
                    }
                }
            }


            if(Avail === false && combo === false)
            {
                res.json("true")
            }
            else
            {
                res.json("false")
            }
        })
    })
};


export const addReserve = (req,res)=>{
    const q = "SELECT tableName FROM reservations WHERE date = ? AND time = ?"
    db.query(q,[req.body.date,req.body.time],(err,data1)=>{
        //console.log(data1) //displays data1
        
        let no_Reservations = false;
        //if no reservations on this day/time, so all Tables are available
        if (data1.length !== 0)
        {
            console.log("Found othe resetvations")
           no_Reservations = true;
        };


        //There are reservations for this time, so grab them
        const tableT = "SELECT * FROM table_tracker"
        db.query(tableT,(err,data2)=>{

            for(let i = 0; i < data1.length; i++)
            {
                //iterates through list of tables on Hand
                for (let j = 0; j < data2.length;j++)
                {
                    //if tables same name decreament on_Hand

                    // let test = data1[i].table_name
                    // let numCom = test.split(",").length-1
                    // let test = parseInt(data1[i].table_name)
                    // console.log(test)

                    if(data1[i].table_name === data2[j].table_name)
                    {
                        console.log("decremint")
                        data2[j].on_Hand = data2[j].on_Hand - 1
                    }
                } 
            }

            var Avail = false;
            let table_types = [];

            //iterates through list of tables on Hand
            for (let i= 0; i < data2.length;i++)
            {
                //Check if we have table and equal to or greater than party
                if(data2[i].on_Hand !== 0 && data2[i].table_size >= req.body.guests)
                {
                    table_types.push(data2[i].table_name)
                    Avail = true;
                    console.log(Avail)
                    break;
                }
            } 


            var combo = false;
            var total = 0;
            var numGuests = req.body.guests
            //if there is nothing available, try a combination
            if(Avail === false)
            {
              
                //look through every table type
                for(var i = 0; i < data2.length; i++)
                {
                    //add available tables until it meets or exceedes number of guests
                    for(var j = 0; j< data2[i].on_Hand; j++){
                        if(total < numGuests){
                            console.log("Adding to total")
                            total = total + data2[i].table_size
                            data2[j].on_Hand = data2[j].on_Hand - 1
                            table_types.push(data2[i].table_name)
                        }
                    }
                    if(total>=numGuests)
                    {
                        console.log("We found combo")
                        combo = true;
                    }
                }
            }


            if(Avail === false && combo === false)
            {
                console.log("No reservations available")

                return res.json = "true"
           
            }
            
            //res.json = "false"
                var tableN2 = ""
                const q2 = "INSERT INTO reservations (`date`,`time`,`guests`,`tableName`,`userID`,`fullname`,`email`,`phone`) VALUES (?)"
                const values = [
                    req.body.date,
                    req.body.time,
                    req.body.guests,
                    tableN2,
                    req.body.userID,
                    req.body.fullname,
                    req.body.email,
                    req.body.phone
                ]

                for(let i=0; i<table_types.length; i++)
                {
                    values[3] = values[3] + table_types[i] + ", ";
                }
                //values[3] = table_types;
                console.log("All tables free NEW")
                db.query(q2,[values],(err,data3)=>{
                    //console.log(data)"
                    if(err) return res.json(err)
                    //return res.json(data3)
                    
                });
                

            })

        })
}
