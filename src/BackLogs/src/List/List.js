import React from 'react';
import './List.css';

const list = (props) =>{
    return(
            <div>
                <div className="my-3 p-3 bg-white rounded box-shadow">
                    <h6 className="border-bottom border-gray pb-2 mb-0">Permanent Employees</h6>
                    <div className="media text-muted pt-3">
                    <p>{props.name}</p>
                    <p>{props.email}</p>
                    <p>{props.company}</p>
                    <p>{props.mobile}</p>
                    </div>
                    <small className="d-block text-right mt-3">
                    <a href="#">All updates</a>
                    </small>
                </div>
            </div>
        )
}

export default list;