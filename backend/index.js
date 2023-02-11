import express from "express"
import reserveRoutes from "./routes/reservations.js"
import authenRoutes from "./routes/authen.js"
import userRoutes from "./routes/users.js"
import cookieParser from "cookie-parser"

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use("/backend/authen", authenRoutes) //end point - 1:03:00
app.use("/backend/users", userRoutes) //end point - 1:03:00
app.use("/backend/reservations", reserveRoutes) //end point - 1:03:00


app.listen(8800,()=>{
    console.log("Connected!")
})







// app.get("/test",(req,res)=>{
//     res.json("It works!")
// })