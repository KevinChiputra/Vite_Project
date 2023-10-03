import React from 'react'
import homeBg from '../assets/homeBg.svg'
import {IoIosArrowForward} from 'react-icons/io'

const Home = () => {
  return (
    <div className="h-screen w-full bg-[url('/src/assets/homeBg.svg')] bg-no-repeat bg-center bg-cover flex">

        <div className='w-full md:w-[1000px] p-16 flex flex-col gap-4 items-center justify-center md:items-start'>
        {/* Titile */}
          <div className='w-full md:w-[500px]'>
            <p className='text-4xl md:text-5xl font-[AbhayaLibre] text-white text-center md:text-start'>Join Us in Japan: A Cultural Journey Awaits</p>
          </div>

          {/* body */}
          <div className='w-full md:w-[600px]'>
            <p className='text-md text-white text-center md:text-start'>From the bustling streets of Tokyo to the serene temples of Kyoto, Japan offers a captivating blend of ancient traditions and modern marvels. Immerse yourself in the mesmerizing beauty of cherry blossoms in spring, the tranquility of Zen gardens, and the culinary delights of sushi and ramen.</p>
          </div>
          
          {/* button */}
          <button className='border-2 px-3 py-2 rounded-full bg-[#2E4374] border-[#2E4374] w-[180px] flex items-center justify-center'>
            <a href="/" className='flex justify-center items-center gap-1'>
              <p className='text-white'>See Our Product</p>
              <IoIosArrowForward color='white' />
            </a>
          </button>
      </div>


    </div>
  )
}

export default Home