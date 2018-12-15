import React from 'react';
import './List.css';

const header = () =>{
    return(
            <div>
            <div role="main" className="container">
                <div className="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded box-shadow">
                    <img className="mr-3" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-outline.svg" alt="" width="48" height="48"/>
                    <div className="lh-100">
                        <h6 className="mb-0 text-white lh-100">Employee List</h6>
                        <small>Since 2018</small>
                    </div>
                </div>
            </div>
            </div>
        )
}

export default header;