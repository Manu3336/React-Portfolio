import React from 'react';

const section = () => {
    return (
        <section>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-lg-2">
                        <div className="p-5">
                            <img className="img-fluid rounded-circle" src={require('../img/05.jpg')} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                        <div className="p-5">
                            <h2 className="display-4">Before software can be reusable it first has to be usable.</h2>
                            <p>It is not enough to do your best: you must KNOW what to do, and THEN do your best.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="p-5">
                            <img className="img-fluid rounded-circle" src={require('../img/06.jpg')} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="p-5">
                            <h2 className="display-4">Before software can be reusable it first has to be usable.</h2>
                            <p>It is not enough to do your best: you must KNOW what to do, and THEN do your best.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id = "contact" className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-lg-2">
                        <div className="p-5">
                            <img className="img-fluid rounded-circle" src={require('../img/07.jpg')} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                    <div className="p-5">
                            <h2 className="display-4">Before software can be reusable it first has to be usable.</h2>
                            <p>It is not enough to do your best: you must KNOW what to do, and THEN do your best.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default section;




