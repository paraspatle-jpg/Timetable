import React from 'react';
import "./LiveClass.css"

export const LiveClass = () => {
    return (
        <div className="live-class-container">
            <h2>Live Class</h2>
            <div className="live-class-flex">
                <div className="previous">
                    <div>
                    <h2>Previous Class</h2>
                    <h3>Desgin Principles of algorithm</h3>
                    </div>
                    <span>Class Ended</span>
                </div>
                <div className="current">
                    <div>
                    <h2>Current Class</h2>
                    <h3>Desgin Principles of algorithm</h3>
                    </div>
                    <span>Class Ended</span>
                </div>
                <div className="next">
                    <div>
                    <h2>Next Class</h2>
                    <h3>Desgin Principles of algorithm</h3>
                    </div>
                    <span>Class Ended</span>
                </div>
            </div>
        </div>
    )
}
