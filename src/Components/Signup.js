import React from 'react'
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
      <h1> Sign UP </h1>
      <form>
        <p> Username </p>
        <input type='text' name='' placeholder='Enter Username'/>
        

      </form>
    </div>
   // </div>
  )
}

export default LoginPage
