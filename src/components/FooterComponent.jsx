import React, { Component } from 'react'

class FooterComponent extends Component {
    render() {
        return (
            <div>
                <div className="copyrights">
                    <div className="container">
                        <div className="footer-distributed">
                            <div className="footer-left">
                                <p className="footer-links">
                                    <a href="#">Home</a>
                                    <a href="#">Blog</a>
                                    <a href="#">Pricing</a>
                                    <a href="#">About</a>
                                    <a href="#">Faq</a>
                                    <a href="#">Contact</a>
                                </p>
                                <p className="footer-company-name">All Rights Reserved. © 2018 <a href="#">StyleBarber</a>
                                    Design By : <a href="https://html.design/">html design</a></p>
                            </div>
                        </div>
                    </div>{/* end container */}
                </div>{/* end copyrights */}
                

            </div>
        )
    }
}

export default FooterComponent
