import React from 'react';

const navBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">

            <div className="container-fluid">
                <a className="navbar-brand" href="#">Software Engineering</a>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            {/* <span className="navbar-toggler-icon"></span> */}
                {/* </button> */}
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#">Contact Me</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>


    )
}

export default navBar;