import React from 'react';
import './Permanent.css';

const permanent = (props) =>{
    return(
        <div className = "Permanent">
            <h2>Permanent Employees</h2>
            <p>{props.name}</p>
            <p>{props.email}</p>
            <p>{props.company}</p>
            <p>{props.mobile}</p>
        </div>
    )
}

export default permanent;