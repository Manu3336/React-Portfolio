import React from 'react';
import './UserRegistration.css'

const userRegistration = (props) =>{
    return(
        <div className="userRegistration">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        
    
        <p for="email"><b>Email</b></p>
        <input type = "text" onChange = {props.onChanged}/>
        <p>My email id is: {props.email} </p>
        <p for="password"><b>Password</b></p>
        <input type = "text" onChange = {props.onChangedPass}/>
        <p>My Password is: {props.password} </p>
      </div>
    )
}

export default userRegistration;