import React, { useState } from 'react';
import './App.css';
import Startgame from './components/Startgame';
import GamePlay from './components/GamePlay';

function App() {
  const [data, setData] = useState([]);  
  const [Gameplay,setGamePlay] = useState(false)
  const toggleGameplay =()=>{
      setGamePlay(prev=>!prev)
  }
  return (
     <>
    {Gameplay ? <GamePlay/> : <Startgame
    toggle={toggleGameplay}
    />} 

   
     
     
     </>


  );
}

export default App;
