import React from 'react'
import {BsYoutube} from "react-icons/bs"
import Link from 'next/link'
import Image from 'next/image'

const footer = () => {
  return (
    <div className='bg-blue-50'>
        <footer className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
    <Image src={require("../../../public/assets/adidass.webp")}
       alt="portfolio"
        width={100} 
        height={100}
      className="w-[50px]"/>
      <span className="ml-3 text-xl">My portfolio</span>
    </a>
    <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
      © 2023 My portfolio 
      </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link
      target="_blank"
       href={'https://www.youtube.com/@asimraza2572/featured'} 
      className="text-gray-500">
       <BsYoutube className="text-3xl hover:text-[#ff0000] "/>
      </Link>
        </span>
  </div>
</footer>

    </div>
  )
}

export default footer