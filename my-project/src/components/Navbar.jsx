import React, { useState } from 'react'
import {Menu ,X} from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
       <header className="body-font bg-gray-800 text-white">
  <div className="container mx-auto flex flex-wrap p-5 flex-row justify-around items-center">
    <a className=" flex title-font font-medium items-center text-gray-900  mb-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <span className="ml-3 text-xl text-white">Tailblocks</span>
    </a>
    <nav className="md:ml-auto hidden md:flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">First Link</a>
      <a className="mr-5 hover:text-gray-900">Second Link</a>
      <a className="mr-5 hover:text-gray-900">Third Link</a>
      <a className="mr-5 hover:text-gray-900">Fourth Link</a>
    </nav>
 <div className='md:hidden'>
        <button  onClick={()=> setIsOpen(!isOpen)}>
        {isOpen?<X/>:<Menu/>}
    </button>
 </div>
 
  </div>
 {isOpen && (
    <nav className="  pb-3 md:ml-auto  flex flex-col gap-4 flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-400">First Link</a>
      <a className="mr-5 hover:text-gray-400">Second Link</a>
      <a className="mr-5 hover:text-gray-400">Third Link</a>
      <a className="mr-5 hover:text-gray-400">Fourth Link</a>
    </nav>
 )} 
</header>

    </>
  )
}

export default Navbar