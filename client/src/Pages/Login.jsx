import React, { useContext } from 'react'
import { Link, useNavigate } from "react-router-dom";
import {useState} from 'react'
import "../App.css"
import { AuthContext } from '../context/authContext';

const Login = () => {
    const [inputs,setInputs] = useState({
        username:"",
        password:""
      })
    
      //to catch registering a username already made
      const [err,setError] = useState(null)
    
      //function to navigate to login after registering
      const navigate = useNavigate()
    
      //get current user info from context
      //login function returns current user
      //login in from authContext
      const {login} = useContext(AuthContext);

  
      //console.log(currentUser) --> from context

      //async function because we are making an api request
      const handleSubmit = async e =>{
        e.preventDefault()
        try{
            await login(inputs)
            //api request moved to authenContext
            //   await axios.post("/authen/login", inputs)
          navigate("/userHome")
        }catch(err){
          setError(err.response.data); //path of the error message in inpsect
        }
      }
    
      const handleChange = e => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
            <button className='SignIn'>Sign In</button>
          </ul>
        </header>
      </div>
    <div className='userSys'>
        <form>
            <h1 className='logintag'>Login</h1>
            <input required type="text" placeholder='username' name = "username" onChange = {handleChange}/>
            <input required type="password" placeholder='password' name = "password" onChange = {handleChange}/>
            <button onClick = {handleSubmit}>Login</button>
            {err && <p>{err}</p>}
            <span>Don't have an account? <Link to="/register">Register</Link></span>
        </form>
    </div>
    </section>
  )
}

export default Login