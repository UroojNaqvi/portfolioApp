
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about'>
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded mx-auto w-[350px] h-[350px]"
        alt="hero"
        src={require("../../../public/assets/profile.jpg")}
        width={300}
        height={500}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-5xl mb-4 font-medium text-gray-900">
        About Me
       
      </h1>
      <p>I'm <span className="name">Urooj Naqvi</span>, a passionate web developer and programmer based in UroojFashionCollection. I love building things for the web and experimenting with new technologies.</p>
      {/* <p className="mb-5 leading-relaxed">
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde nemo, doloremque a voluptate tenetur vero hic labore quas deleniti libero dignissimos possimus. Eos nesciunt fugit numquam rerum dolores cum obcaecati.
      </p> */}
      <div className="flex justify-center">
        <a href={""}>
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg text-gap-300">
          View CV
        </button>
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About