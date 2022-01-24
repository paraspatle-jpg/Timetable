import React from 'react';
import { Button } from "../button/ButtonVar2";
import './Days.css'

export const Days = (props) => {
    return (
        <div className="day-time-container">
            <div className="days-container">
                <h2>Select Day</h2>
                <div className="day-input-container">
                    <Button title={"Monday"} value={1} setSomething={props.setYear} something={props.year} />
                    <Button title={"Tuesday"} value={1} setSomething={props.setYear} something={props.year} />
                    <Button title={"Wednesday"} value={2} setSomething={props.setYear} something={props.year}/>
                    <Button title={"Thursday"} value={3} setSomething={props.setYear} something={props.year}/>
                    <Button title={"Friday"} value={4} setSomething={props.setYear} something={props.year}/>
                </div>
            </div>
            <div className="days-container">
                <h2>Select Time</h2>
                <div className="day-input-container">
                    <Button title={"9-10"} value={1} setSomething={props.setYear} something={props.year} />
                    <Button title={"10-11"} value={1} setSomething={props.setYear} something={props.year} />
                    <Button title={"11-12"} value={2} setSomething={props.setYear} something={props.year}/>
                    <Button title={"12-1"} value={3} setSomething={props.setYear} something={props.year}/>
                    <Button title={"2-3"} value={4} setSomething={props.setYear} something={props.year}/>
                    <Button title={"3-4"} value={4} setSomething={props.setYear} something={props.year}/>
                </div>
            </div>
        </div>
    );
}
