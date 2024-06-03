import React, { useState } from 'react'

function NumberSelector({seterror,error,selectNumber,setSelectedNumber}) {

  const arrNumber = [1, 2, 3, 4, 5, 6]

  const numberSelectorHandler=(value)=>{
    setSelectedNumber(value);
    seterror("")
  }

  return (
    <div className='flex flex-col  '>
      <p className='text-red-600'>{error}</p>
    <div className='flex gap-6'>
      {arrNumber.map((value, i) => (
        <div
          key={i}
          onClick={() => numberSelectorHandler(value)}
          className={`h-16 w-16 border-black border grid place-content-center font-bold cursor-pointer ${value === selectNumber ? 'bg-black text-white' : 'bg-white'
            }`}>

          {value}</div>
      ))}
      
    </div>
    
    <p className='font-2 text-xl flex'>Select Number</p>

    </div>
  )
}

export default NumberSelector