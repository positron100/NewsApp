import React, { Component } from 'react'
import './Spinning.css';
export class Spinner extends Component {
    render() {
        return (
            <>
                <div className="container my-3">

                    <div className="d-flex justify-content-center mb-4">
                        <div className="spinner">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default Spinner