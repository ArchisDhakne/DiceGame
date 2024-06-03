import React from 'react'

function TotalScore({score}) {
  return (

    <div className='border-2-black w-48 text-center bg-pink-100'>
      <h1 className='text-7xl'>{score}</h1>
      <p className='text-2xl'>total score</p>
    </div>

  )
}

export default TotalScore
