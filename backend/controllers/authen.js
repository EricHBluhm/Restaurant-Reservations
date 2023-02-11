import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


//check existing user
export const register = (req,res) =>{

    //check existing user
    const q = "SELECT * FROM users WHERE email = ? OR username = ?" //query

    //query, (query,[email from query, username from quert], (return either err, or the data we requested))
    db.query(q,[req.body.email,req.body.username], (err,data)=>{
        if(err) return res.json(err)
        if(data.length) return res.status(409).json("User already exists!"); //if user already exists

        //hash passwords and create user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        //insert user into the db
        const q = "INSERT INTO users(`username`,`fullname`,`email`,`phone`,`password`,`points`) VALUES (?)"
        const values = [
            req.body.username,
            req.body.fullname,
            req.body.email,
            req.body.phone,
            hash,
            req.body.points
        ]

        db.query(q,[values],(err,data)=>{
            if (err) return res.json(err);
            console.log("created users")
            return res.status(200).json("User has been created!")
        });

    });
}

export const login = (req,res) =>{
    //check is user exists or not

    const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!"); //no user with the current username, return error

    //Check password, compare hash in db to inputed plaintext
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password //retuns password of the user, data is an array
    );

    //check to see if password is correct
    if (!isPasswordCorrect)
      return res.status(400).json("Wrong username or password!");

    //jwt token, store user id in a cookie, so we know who is logged in currently
    //npm i 
    const token = jwt.sign({ id: data[0].id }, "jwtkey");
    const { password, ...other } = data[0]; //removes password from our data


    //npm i cookie-parser
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other); //send all data basides password
  });

}

export const logout = (req,res) =>{

}

