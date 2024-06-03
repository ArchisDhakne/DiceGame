import React, { useState } from 'react';
import Button from '../buttons/Button';
function Startgame({toggle}) {
 
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container flex flex-col items-center p-6 bg-white rounded shadow-lg space-y-4">
        <div className="flex items-center space-x-4">
          <img src="dices 1.png" alt="Dices" className="w-32 h-32 object-contain" />
          <h1 className="font-bold text-3xl text-gray-800">DICE GAME</h1>
        </div>
        
        <Button name={`PlayGame`} onClick={toggle}/>
      </div>
    </div>
  );
}

export default Startgame;
