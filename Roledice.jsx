import React from 'react'

function Roledice({currentDice,roleDice}) {

  return (
  <div>
     <div className='mt-12 flex items-center justify-center'
     onClick={roleDice}
     >
      <img src={`/public/images/dice/dice_${currentDice}.png`} alt='dice 1' />
     </div> 
   </div>
  )
}

export default Roledice
