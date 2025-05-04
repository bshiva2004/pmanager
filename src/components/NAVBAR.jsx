import React from 'react'
import ABOUT from './ABOUT'

const NAVBAR = ({setPage }) => {
  return (
   <nav className="bg-purple-300 max-h-14 w-[100%] flex over">
    <ul className="flex w-[100%] justify-between ">
        <div className="logo text-3x1 font-bold">
          <span className="text-green-500 ml-2">   &lt;/ </span>
          Pass
          <span className="text-green-500"> oP /&gt;</span>
        </div>
        <div className="flex justify-around align-middle gap-2 pt-4 mr-4">
            <a className="hover:font-bold" href="#"  onClick={() => setPage("home")}>home</a>
            <a className="hover:font-bold" href="#">search </a>
            <span className="hover:font-bold cursor-pointer" onClick={() => setPage("about")}>about</span>

          
        </div>
    </ul>
   </nav>
  )
}

export default NAVBAR
