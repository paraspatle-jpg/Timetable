import React from 'react';
import { Button } from "../button/ButtonVar2";
import './Days.css'

export const Days = (props) => {
    return (
        <div className="day-time-container">
            <div className="days-container">
                <h2>Select Day</h2>
                <div className="day-input-container">
                    <Button title={"Monday"} value={1} setSomething={props.setDay} something={props.day} />
                    <Button title={"Tuesday"} value={2} setSomething={props.setDay} something={props.day} />
                    <Button title={"Wednesday"} value={3} setSomething={props.setDay} something={props.day}/>
                    <Button title={"Thursday"} value={4} setSomething={props.setDay} something={props.day}/>
                    <Button title={"Friday"} value={5} setSomething={props.setDay} something={props.day}/>
                </div>
            </div>
            <div className="days-container">
                <h2>Select Time</h2>
                <div className="day-input-container">
                    <Button title={"9-10"} value={1} setSomething={props.setTime} something={props.time} />
                    <Button title={"10-11"} value={2} setSomething={props.setTime} something={props.time} />
                    <Button title={"11-12"} value={3} setSomething={props.setTime} something={props.time}/>
                    <Button title={"12-1"} value={4} setSomething={props.setTime} something={props.time}/>
                    <Button title={"2-3"} value={5} setSomething={props.setTime} something={props.time}/>
                    <Button title={"3-4"} value={6} setSomething={props.setTime} something={props.time}/>
                </div>
            </div>
        </div>
    );
}
