import React from 'react';

const header = () => {
    return (
        <header className="masthead text-center text-white">
            <div className="masthead-content">
                <div className="container">
                    <h1 className="title-line-h1">Before software can be reusable it first has to be usable.</h1>
                    
                    <h3 className="introduction-h3">Hi, I'm  <mark>Manu Kapoor</mark> a web designer & front‑end developer focused on crafting clean  & user‑friendly experiences</h3>
                    
                    {/* <h1 className="masthead-subheading mb-0">Developer/Coder</h1> */}
                    {/* <h5 className = "tag-line">I'm </h5> */}
                    {/* <h2 className="masthead-subheading mb-0">Making difference</h2> */}
                    {/* <h2 className="masthead-heading mb-0">Manu Kapoor</h2> */}
                    {/* <a href="#" className="btn btn-default btn-xl rounded-pill mt-5">check my work</a> */}
                </div>
            </div>
            <div className="bg-circle-1 bg-circle"></div>
            <div className="bg-circle-2 bg-circle"></div>
            <div className="bg-circle-3 bg-circle"></div>
            <div className="bg-circle-4 bg-circle"></div>
        </header>
    )
}

export default header;