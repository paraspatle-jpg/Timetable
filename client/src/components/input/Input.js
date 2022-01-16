import React from 'react'
import "./Input.css";
import { Button } from "../button/Button";

export const Input = (props) => {
    return (
        <div className="selection">
            <div className="year">
                <h2>Select Year</h2>
                <div className="but-container">
                    <Button title={"1st Year"} value={1} setSomething={props.setYear} something={props.year} />
                    <Button title={"2nd Year"} value={2} setSomething={props.setYear} something={props.year}/>
                    <Button title={"3rd Year"} value={3} setSomething={props.setYear} something={props.year}/>
                    <Button title={"4th Year"} value={4} setSomething={props.setYear} something={props.year}/>
                </div>
            </div>
            <div className="section">
                <h2>Select Section</h2>

                <div className="but-container">
                    <Button title={"Section A"} value={1} setSomething={props.setSection} something={props.section}/>
                    <Button title={"Section B"} value={2} setSomething={props.setSection} something={props.section}/>
                </div>
            </div>
        </div>
    )
}
