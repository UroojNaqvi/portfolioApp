import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Project = () => {
  return (
    <div id='project'>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="smi:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        My Projects
      </h1>
    </div>
    <div className="flex flex-wrap -m-5 -mt-[5rem]">
        {/* Project */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/porfolio1.webp")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
            Panaveerse Dao Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            PANAVERSE DAO
            </h1>
            {/* <p className="leading-relaxed line-clamp-2">
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae in numquam assumenda, cum fuga rerum cumque minus enim. Atque eum voluptatem accusantium iste sed eaque exercitationem provident, unde consectetur ex!
            </p> */}
            <Link target='_blank' href={"https://github.com/UroojNaqvi/PanaverseDaoWebsite"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
              View Project..</p>
              </Link>
          </div>
        </div>
      </div>
      {/* Project */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/porfolio2.webp")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Sms Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              SMS
            </h1>
            <p className="leading-relaxed line-clamp-2">
              This is the project which I've created for those who owns a catering business.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis placeat corrupti labore ipsum eum sed ullam, sapiente molestias voluptatum animi ducimus nemo quod et natus fugit aut cupiditate rem deleniti!
            </p>
            <Link target='_blank' href={"https://sms-soto-gamma.vercel.app/"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
              View Project..</p>
              </Link>
          </div>
        </div>
      </div>
      {/* Project */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/porfolio1.webp")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Sms Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              SMS
            </h1>
            <p className="leading-relaxed line-clamp-2">
              This is the project which I've created for those who owns a catering business.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis placeat corrupti labore ipsum eum sed ullam, sapiente molestias voluptatum animi ducimus nemo quod et natus fugit aut cupiditate rem deleniti!
            </p>
            <Link target='_blank' href={"https://sms-soto-gamma.vercel.app/"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
              View Project..</p>
              </Link>
          </div>
        </div>
      </div>
    
    </div>
  </div>
</section>

    </div>
  )
}

export default Project