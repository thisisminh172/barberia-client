import React, { Component } from 'react'

class LoaderComponent extends Component {
    render() {
        return (
            <div>
                {/* LOADER */}
                <div id="preloader">
                    <div className="cube-wrapper">
                        <div className="cube-folding">
                            <span className="leaf1" />
                            <span className="leaf2" />
                            <span className="leaf3" />
                            <span className="leaf4" />
                        </div>
                        <div className="mus">
                            <img src="images/lode-img.png" alt />
                        </div>
                        <span className="loading" data-name="Loading">StyleBarber Loading</span>
                    </div>
                </div>{/* end loader */}
                {/* END LOADER */}
            </div>

        )
    }
}

export default LoaderComponent
