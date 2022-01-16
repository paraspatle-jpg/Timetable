import React, { useEffect, useState } from "react";
import { Navbar } from './components/navbar/Navbar';
import { Input } from './components/input/Input';
import {LiveClass} from './components/liveClass/LiveClass';
import './App.css'

function App() {
  //selecting year and section
  const [year, setYear] = useState(1);
  const [section, setSection] = useState(1);
  return (
    <div className="App-container">
      <Navbar />
      <Input year={year} section={section} setYear={setYear} setSection={setSection} />
      <LiveClass />
    </div>
  );
}

export default App;










// const [data, setData] = useState([]);
// const [TTData, setTTData] = useState(null);
//  useEffect(() => {
//   Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vRI9_lQ3H_rJque4KLTC5S_YF4wyUhcioMhcYRTG2jBCnkdf6mQuNmWB5i3kjLDsyN8h9U6Vp5Tq8yB/pub?output=csv",{
//     download:true,
//     header: true, 
//     step: (row)=>{
//       console.log("row: ", row.data);
//     },
//     complete: (result) => {
//       console.log(result);
//     }
//   })

// }, []);