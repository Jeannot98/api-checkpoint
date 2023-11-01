
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';




function App() {
  const [dat, setDat] = useState([]);
  

  useEffect(()=>{
   function axiosData(){
    axios.get('https://jsonplaceholder.typicode.com/users').then(function(response){
      setDat(response.data)
    })}

   axiosData();
  }, []);

  return (
    <div className="App">
     {dat.map((user)=>{
      return <div style={{display:"grid", border:"1px solid" ,gridTemplateColumns:"repeat(3, 1fr)"}}>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:10}}>
          <h1>Name:</h1>
          <span>{user.name}</span>
        </div>

        <div>
          <h1>Username:</h1>
          <span>{user.username}</span>
        </div>

        <div>
          <h1>Email:</h1>
          <span>{user.email}</span>
        </div>
      </div>
})}
    </div>
  );
}

export default App;
