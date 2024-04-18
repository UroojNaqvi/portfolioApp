"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Typewriter from 'typewriter-effect'; /// npm i typewriter-effect

const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-gray-100 ">
     <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
     <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
     I am
     <br className="hidden lg:inline-block" />
     <Typewriter
    options={{
    strings: ['Web Developer'],
    autoStart: true,
    loop: true,
      }}/>
    </h1>
    <div className='w-[100px] h-[2px] bg-blue-700'></div>
     <p className="mb-8 leading-relaxed">
     Dynamic and skilled web developer with a passion for creating interactive and user-friendly websites. Proficient in front-end and back-end development technologies, seeking opportunities to contribute to innovative projects and further enhance my skills.
     </p>
     <div className="flex justify-center">
     <Link href={"#Contact"}>
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          Contact
        </button>
        </Link>
     </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    <Image
        className="object-cover object-center rounded mx-auto w-[15rem]"
        src= {require("../../../public/assets/porfolio2.webp")}
        alt="porfolio2"
        width={500}
        height={500} />
    </div>
    </div>
    </section>
  )
}

export default Hero