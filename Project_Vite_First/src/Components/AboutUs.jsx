import React from 'react'
import AboutUsImage from '../assets/AboutImage.svg'


const AboutUs = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center py-6 px-16'>
        
        {/* title */}
        <div className='pb-8'>
            <p className='text-4xl md:text-5xl font-[AbhayaLibre] text-[#2E4374] font-bold'>About</p>
        </div>

        {/* Describe section */}
        <div className='md:flex md:flex-row justify-center items-center gap-8 sm:flex-col'>
            {/* Description */}
            <div className='text-lg w-[250px] flex flex-col items-center justify-center gap-4 md:w-[750px] md:text-2xl'>
                <p>
                At Travelo, we're not just a travel agency; we're your passport to unforgettable Japanese adventures. We understand that your dream vacation is more than just a trip—it's an experience filled with cultural immersion, awe-inspiring sights, and cherished memories. <span className='text-[#2E4374]'>That's why we've crafted Travelo, the ultimate web app designed to bring the magic of Japan to your fingertips</span>.
                </p>

                <p>
                At Travelo, <span className='text-[#2E4374]'>we are committed to making your dream vacation a reality</span>. We strive to provide top-notch customer service, ensuring your trip is not only seamless but also unforgettable. Your safety, comfort, and satisfaction are our top priorities.
                </p>
            </div>

            {/* Image */}
            {/* <div>
                <img src={AboutUsImage} alt="AboutUsImage" />
            </div> */}
        </div>



    </div>
  )
}

export default AboutUs