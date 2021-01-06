import './App.css';
import { useState } from "react";
import Axios from "axios";


function App(){
  const [employee, setEmployee]=useState([]);
  const getEmployees = async() => {
   await Axios.get("http://localhost:3001/campaign")
    .then((response) => {
     setEmployee( response.data);
    
  });
}


  return (
    <div className="App">
      
        <button onClick={getEmployees}>Show Employees</button>
        {employee.map((e)=>{
          return <div>{e.campaign_name}</div>
        })}


     </div>)
}

export default App;
