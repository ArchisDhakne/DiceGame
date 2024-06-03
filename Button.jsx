import React from 'react'

function Button({name,onClick}) {
  return (
    <>
       <button className="bg-black text-white px-2 py-1 rounded cursor-pointer hover:bg-slate-300 hover:text-black w-28"
       onClick={onClick} >{name}</button>
      
    </>
  )
}

export default Button
