import React from 'react';
import './Contract.css'

const contract = (props) =>{
    return(
        <div className="Contract">
            <h2>Contract Employees</h2>
            <p>{props.name}</p>
            <p>{props.email}</p>
            <p>{props.company}</p>
            <p>{props.mobile}</p>
            <button onClick = {props.onDelete}>Delete Me</button>
        </div>
    )
}

export default contract;