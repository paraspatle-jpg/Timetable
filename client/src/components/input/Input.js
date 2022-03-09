import React from 'react'
import "./Input.css";
import { Button } from "../button/Button";

export const Input = (props) => {
    return (
        <div className="selection">
            <div className="year">
                <h2><span>Select Year</span></h2>
                <div className="but-container">
                    <Button title={"1st Year"} value={"1stYear"} setSomething={props.setYear} something={props.year} />
                    <Button title={"2nd Year"} value={"2ndYear"} setSomething={props.setYear} something={props.year}/>
                    <Button title={"3rd Year"} value={"3rdYear"} setSomething={props.setYear} something={props.year}/>
                    <Button title={"4th Year"} value={"4thYear"} setSomething={props.setYear} something={props.year}/>
                </div>
            </div>
            <hr/>
            <div className="section">
                <h2><span>Select Section</span></h2>

                <div className="but-container">
                    <Button title={"Section A"} value={"SectionA"} setSomething={props.setSection} something={props.section}/>
                    <Button title={"Section B"} value={"SectionB"} setSomething={props.setSection} something={props.section}/>
                </div>
            </div>
        </div>
    )
}
