// import { db } from "../db.js";

// //const {currentUser} = useContext(AuthContext);
// //need to include context and add those values to the insert if they exist?
// export const addReserve = (req,res)=>{
//     // res.json("from controller")
//     //const {currentUser} = useContext(AuthContext);

//     //grab reserations during same date/time
//     const q = "SELECT table_name FROM reservation_details WHERE reservation_Date = ? AND reservation_Time = ?"
//     db.query(q,[req.body.date,req.body.time],(err,data1)=>{
//         //console.log(data1) displays data1
//         //gets all tables that we have on hand
//         const tableT = "SELECT table_name, on_Hand, table_size FROM table_tracker"
//         db.query(q,(err,data2)=>{
//             //console.log(data1) display data1
//             //data1[0].table_name gets one element from data1 query
//             //data1.length gets the size
//             //modify tables on hand
//             //iterates through tables taken
//             for(let i = 0; i < data1.length;i++)
//             {
//                 //iterates through list of tables on Hand
//                 for (let j = 0; j < data2.length;j++)
//                 {
//                     //if tables same name decreament on_Hand
//                     if(data1[i].table_name === data2[j].table_name)
//                     {
//                         data2[j].on_Hand = data2[j].on_Hand - 1

//                     }
//                 } 
//             }

//             var Avail = false;
//             var tableName;
//             //iterates through list of tables on Hand
//             for (let i= 0; i < data2.length;i++)
//             {
//                 //Check if we have table and equal to or greater than party
//                 if(data2[i].on_Hand !== 0 && data2[i].table_size >= req.body.guests)
//                 {
//                     Avail = true;
//                     tableName = data2[i].table_name;
//                 }
//             } 

//             //if there is no single table available, find combo of tables
//             var combo = false;
//             let table_types = [];
//             var total = 0;
//             if(Avail === false)
//             {
//                 //look through every table type
//                 for(var i = 0; i < data2.length;i++)
//                 {
//                     //add available tables until it meets or exceedes number of guests
//                     for(var j = 0; j< data2[i].on_Hand; j++){
//                         if(total < data1.guests){
//                             total = total + parseInt(data2[i].table_name)
//                             data2[j].on_Hand = data2[j].on_Hand - 1
//                             table_types.push(data2[i].table_name)
//                         }
//                         else {
//                             combo = true;
//                             break;
//                         }
//                     }
//                 }
//             }

//             //no table avaialable, inform customer to try again
//             if(combo === false && Avail === false){
//                 return //something, might have to make two functions to return if no reservation can be made
//             }

//             //if we can combine tables, add a reservation in the reservation_table for each table being used
//             if(combo === true){
//                 //for loop query
//             }

//             //customer can reserve the table:
//                 //normal insert query




//         })


//         // let total_tables = [2,3,4,5];

//         // //find if single table can accomidate guests
//         // if(req.body.guests > total_tables.length+1)
//         // {
//         //     let addTables = 0;
//         //     let tTables = total_tables.length 
//         //     while(addTables < req.body.guests)
//         //     {
//         //         total_tables[totl]
//         //     }
//         // }

//         // //find remaining tables
//         // for(let i=0; i<data.length; i++){
//         //     let curTable = data[i].guests;
//         // }
//     })




//     const q2 = "INSERT INTO reservations (`date`,`time`,`guests`,`table`,`userID`,`fullname`,`email`,`phone`) VALUES (?)"
//     const values = [
//         req.body.date,
//         req.body.time,
//         req.body.guests,
//         req.body.table,
//         req.body.userID,
//         req.body.fullname,
//         req.body.email,
//         req.body.phone
//     ]

//     //check to see if the user has an account, if so fill in their information
//     // const user = currentUser.username;
//     // if (user.length){
//     //     const values = [
//     //         req.body.date,
//     //         req.body.time,
//     //         req.body.guests,
//     //         req.body.table,
//     //         currentUser.userID,
//     //         currentUser.fullname,
//     //         currentUser.email,
//     //         currentUser.phone
//     //     ]
//     // }
//     // else{
//     //     const values = [
//     //         req.body.date,
//     //         req.body.time,
//     //         req.body.guests,
//     //         req.body.table,
//     //     ]
//     // }


//     db.query(q2,[values],(err,data)=>{
//         if(err) return res.json(err)
//         return res.json(data)
//     });

// }


// // app.post("/books", (req,res)=>{
// //     const q = "INSERT INTO books (`title`,`desc`,`price`,`cover`) VALUES (?)"
// //     const values = [
// //         req.body.title,
// //         req.body.desc,
// //         req.body.price,
// //         req.body.cover,
// //     ]

// //     db.query(q,[values], (err,data)=>{
// //         if(err) return res.json(err)
// //         return res.json(data)
// //     })
// // })