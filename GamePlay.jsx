import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import Roledice from './Roledice'
import Button from '../buttons/Button'
import Rules from './Rules'
function GamePlay() {

  const[score,setScore]=useState(0)
  const [selectNumber, setSelectedNumber] = useState()
  const [currentDice,SetCurrentDice] = useState(1);
  const [error,seterror]=useState();
  const [showRules,setshowRules]=useState(false)

  const generateRandomNum = (min,max) =>{
    return Math.floor(Math.random()*(max - min) + min);
  };
const resetScore = () =>{
    setScore(0);
  }
  const roleDice =()=>{
    if(!selectNumber) {
      seterror("You have not selected a number");
      return;
    }

    const randomNumber = generateRandomNum(1,7);
    SetCurrentDice((prev)=> randomNumber);


    if(selectNumber === randomNumber){
      setScore((prev)=>prev + randomNumber)
    }else{
      setScore((prev)=>prev-2)
    }

    setSelectedNumber(undefined)
  };

  

  return (
  <div  >
    <div className='flex justify-between items-end pt-14' >
      <TotalScore score={score}/>
      <NumberSelector 
       selectNumber={selectNumber}
       setSelectedNumber={setSelectedNumber}
       error={error}
       seterror={seterror}
      />
      </div>
      <Roledice 
       currentDice={currentDice}
       roleDice={roleDice}
      />
      <div className='flex gap-2 flex-col  items-center'>
       <p className='font-semibold text-xl'>Click on Dice Roll</p>
        <Button name={'Reset'}
           onClick={resetScore}
        />
        <Button 
        name={'Show Rules'}
        onClick={()=>{
          setshowRules((prev)=>!prev)
        }}/>
      </div>
{  showRules &&  <Rules/>}
  </div>
  )
}

export default GamePlay
