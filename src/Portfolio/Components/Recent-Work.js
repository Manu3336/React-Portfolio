import React from 'react';

const recentWork = () => {
    return (
        <section>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="p-5">
                            <img className="img-fluid rounded-circle" src={require('../img/project_04.png')} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="p-5">
                            <h2 className="display-4">Panasonic</h2>
                            <p>Application Deployments define the package of software components that make up an application in a particular environment, e.g. development or production. Instances of these are deployed onto physical Technology Nodes to capture where that software is executing.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-lg-2">
                        <div className="p-5">
                            <img className="img-fluid rounded-circle" src={require('../img/project_01.png')} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                        <div className="p-5">
                            <h2 className="display-4">Dash</h2>
                            <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="p-5">
                            <img className="img-fluid rounded-circle" src={require('../img/project_02.png')} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="p-5">
                            <h2 className="display-4">DBS Bank</h2>
                            <p>As an asynchronous event driven JavaScript runtime, Node is designed to build scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="contact" className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-lg-2">
                        <div className="p-5">
                            <img className="img-fluid rounded-circle" src={require('../img/project_03.png')} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                        <div className="p-5">
                            <h2 className="display-4">Bank Danamon</h2>
                            <p>Application development is the process of creating a computer program or a set of programs to perform the different tasks that a business requires. From calculating monthly expenses to scheduling sales reports, applications help businesses automate processes and increase efficiency.</p>
                        </div>
                    </div>
                </div>
            </div>
            

        </section>
    )
}

export default recentWork;




