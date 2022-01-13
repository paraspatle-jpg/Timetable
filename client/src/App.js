import React, { useEffect, useState} from "react";
import Papa from "papaparse"
import { Navbar } from './components/navbar/Navbar';
import { Day } from './components/day/Day';
import { Input } from './components/input/Input';
import Tabletop from "tabletop";
import './App.css'

function App() {
 const [data,setData] = useState([]);
 const [TTData, setTTData] = useState(null);
 useEffect(() => {
  Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vRI9_lQ3H_rJque4KLTC5S_YF4wyUhcioMhcYRTG2jBCnkdf6mQuNmWB5i3kjLDsyN8h9U6Vp5Tq8yB/pub?output=csv",{
    download:true,
    header: true, 
    step: (row)=>{
      console.log("row: ", row.data);
    },
    complete: (result) => {
      console.log(result);
    }
  })

}, []);
  return (
    <div className="App-container">
      <Navbar/>
      {!TTData?(
          <Input/>
      ):(
        <Day/>
      )}
    </div>
  );
}

export default App;
