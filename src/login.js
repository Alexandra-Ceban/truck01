import React from 'react';
import Logincard from './Logincard';
import './login.css'

const login=()=>{
return(
 <>
  <header className="header">

            <img
                className="logo"
                alt="logo"
                src=""
            />
    
            <a href="login.js">
                <div className='logincircle'>
                
                 <img
                className="login-icon"
                alt="login"
                src="https://trucks.com/_next/static/media/user-profile-icon.24a_9qj4qlxlk.svg"
            /> </div>
               </a>
        </header>
           <div className='loginback'>
            <img src="https://st4.depositphotos.com/1020618/22078/i/450/depositphotos_220787602-stock-photo-truck-with-container-on-road.jpg"></img>
         <Logincard />
         </div>
         </>
)
}

export default login;