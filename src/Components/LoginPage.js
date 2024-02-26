import React from 'react'
import './Signup';

//import style from style.css
import  './style.css'

import mimi from '../mimi.jpg';
//import back1 from '../back1.jpeg';

function LoginPage() {
  return (
    // <div className='back'>
    // <img src={back1} className="avat" alt="back1.jpeg" />
    <div className='loginbox'>
      
       <img src={mimi} className="avator" alt="MoH lOGO.jpg" />
      <h1> Login Page </h1>
      <form>
        <p> Username </p>
        <input type='text' name='' placeholder='Enter Username'/>
        <p> Password </p>
        <input type='Password' name='' placeholder='Enter Password'/>
        <input type='Submit' name='' value='Login'/>
      
        <a href='#'> Lost your password?</a> <br></br>
        <a href='./Signup.js'> Don't have an account ?</a> <br></br>

      </form>
    </div>
   // </div>

  )
}

export default LoginPage
