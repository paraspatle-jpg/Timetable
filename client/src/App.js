import React, { useState, useEffect } from "react";
import { Navbar } from './components/navbar/Navbar';
import { Input } from './components/input/Input';
import { LiveClass } from './components/liveClass/LiveClass';
import { Days } from './components/days/Days';
import './App.css';
import { collection, getDocs } from 'firebase/firestore/lite';
import db from './utils/Firebase'



function App() {
  //selecting year and section
  const [year, setYear] = useState("1stYear");
  const [section, setSection] = useState("SectionA");
  const [day, setDay] = useState("Monday");
  const [time, setTime] = useState("9-10");

  const [response, setResponse] = useState(["Loading"])
  async function getData(db) {
    const YearQuery = collection(db, year);
    const YearData = await getDocs(YearQuery);
    console.log(YearData.docs.map(doc => doc.data()));
  }
  
  useEffect(async () => {
    await getData(db);
  },[year])

  return (
    <div className="App-container">
      <Navbar />
      <Input year={year} section={section} setYear={setYear} setSection={setSection} />
      <LiveClass />
      <Days day={day} time={time} setDay={setDay} setTime={setTime} />
    </div>
  );
}

export default App;