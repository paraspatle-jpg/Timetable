import React from 'react';
import "./LiveClass.css"

export const LiveClass = () => {
    return (
        <div className="live-class-container">
            <h2>Live Class</h2>
            <div className="live-class-flex">
                <div className="previous">Previous</div>
                <div className="current">Current</div>
                <div className="next">Next</div>
            </div>
        </div>
    )
}
