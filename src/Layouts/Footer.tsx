import React from 'react'

function Footer() {
    return (
        <footer>
            <div className="container pb-7">
                <div className="row gx-lg-0 gy-6">
                    <div className="col-lg-4">
                        <div className="widget">
                            <img
                                className="mb-4"
                                src="./assets/img/logo.png"
                                srcSet="./assets/img/logo@2x.png 2x"
                                alt=""
                            />
                            <p className="lead mb-0">
                                We are trusted by over 5000+ clients. Join them by using our
                                services and grow your business.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 offset-lg-2">
                        <div className="widget">
                            <div className="d-flex flex-row">
                                <div>
                                    <div className="icon text-primary fs-28 me-4 mt-n1">
                                        {" "}
                                        <i className="uil uil-phone-volume" />{" "}
                                    </div>
                                </div>
                                <div>
                                    <h5 className="mb-1">Phone</h5>
                                    <p className="mb-0">
                                        00 (123) 456 78 90 <br />
                                        00 (987) 654 32 10
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </footer>

    )
}

export default Footer