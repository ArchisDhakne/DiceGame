import React from 'react'

function Rules() {
  return (
    <div className=' content-center flex justify-center '>
    <div className='bg-pink-100 p-4 w-96 m-4 '>
      <h1 className='font-semibold text-xl'>How to play dice game :</h1>
      <p className='font-semibold'> select any number </p>
      <p className='font-semibold'>Click on dice image</p>
      <p className='font-semibold'>after click on dice if selected number is equal to dice number you will get same point as dice {' '}</p>
      <p className='font-semibold'>if you get wrong guess then 2 point will be deducted</p>
    </div>
    </div>
  )
}

export default Rules 
