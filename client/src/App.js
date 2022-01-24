import React, { useState } from "react";
import { Navbar } from './components/navbar/Navbar';
import { Input } from './components/input/Input';
import { LiveClass } from './components/liveClass/LiveClass';
import { Days } from './components/days/Days';
import firebase from './utils/firebaseConfig'
import './App.css';


const tt = {
  year: {
    year2: {
      sectionA: {

      },
      sectionB: {

      }
    },
  }
}


function App() {
  //selecting year and section
  const [year, setYear] = useState(0);
  const [section, setSection] = useState(0);
  return (
    <div className="App-container">
      <Navbar />
      <Input year={year} section={section} setYear={setYear} setSection={setSection} />
      <LiveClass />
      <Days />
    </div>
  );
}

export default App;