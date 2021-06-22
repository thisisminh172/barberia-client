import React, { Component } from 'react'

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <div className="top-add alert alert-light alert-dismissible">
                    <button type="button" className="close" data-dismiss="alert">×</button>
                    <strong>Success!</strong> This alert box could indicate a successful or positive action.
                </div>

                {/* Start header */}
                <header className="top-navbar">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container">
                            <a className="navbar-brand" href="index.html">
                                <img src="images/logo.png" alt />
                            </a>
                            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbars-rs-food" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar top-bar" />
                                <span className="icon-bar middle-bar" />
                                <span className="icon-bar bottom-bar" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbars-rs-food">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active"><a className="nav-link" href="index.html">Home</a></li>
                                    <li className="nav-item"><a className="nav-link" href="services.html">Our Services</a></li>
                                    <li className="nav-item"><a className="nav-link" href="about.html">About Us</a></li>
                                    <li className="nav-item"><a className="nav-link" href="barbers.html">Our Barbers</a></li>
                                    <li className="nav-item"><a className="nav-link" href="appointment.html">Appointment</a></li>
                                    <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
                {/* End header */}
            </div>

        )
    }
}

export default HeaderComponent
