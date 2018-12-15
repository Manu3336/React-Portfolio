import React from 'react';
import "./Person.css";

const person = (props) => {
    return (
        <div className = "Person">
            <p>I am {props.name} Kapoor </p>
            <input type = "text" onChange = {props.onChanged}/>
        </div>
    )

}

export default person;