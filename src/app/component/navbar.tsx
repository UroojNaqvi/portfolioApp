import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineDownload } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className='bg-white z-50 sticky top-0'>
        <header className="text-gray-400 bg-gray-900 body-font z-50 sticky top-0">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <Image 
       src={require("../../../public/assets/adidass.webp")}
       alt="portfolio"
        width={100} 
        height={100}
      className="w-[50px]"/>
      <span className="ml-3 text-xl">My Portfolio</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href="" className="mr-5 hover:text-blue-600">Home</Link>
      <Link  href={"#about"}className="mr-5 hover:text-blue-600">About</Link>
      <Link href={"#skills"}className="mr-5 hover:text-blue-600">Skills</Link>
      <Link href={"#project"} className="mr-5 hover:text-blue-600">Projects</Link>
      <Link href={"#contact"} className="mr-5 hover:text-blue-600">Contact</Link>
    </nav>
    <a href="">
    <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
       Download CV
      <AiOutlineDownload className='text-xl ml-2'/>
    </button>
    </a>
  </div>
</header>
    </div>
  )
}

export default Navbar