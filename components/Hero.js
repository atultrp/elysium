import React from 'react'
import Button from './shared/Button'
import { FaTwitter, FaDiscord, FaInstagram } from "react-icons/fa6";
import { FaFacebook, FaTelegramPlane } from "react-icons/fa";

const Hero = () => {

  return (
    <div className='px-3 bg-[#002859] text-white' style={{backgroundImage: "url('images/backgroup/bg-1.jpg')", backgroundPositionY: "-140px", backgroundPositionX: "-100px"}}>
      <div className='md:w-1/2'>
      <h2 className='pt-[158px] mb-3 text-[54px] font-semibold leading-tight'>
        Giving A New-Dimension To Virtual Real Estate
      </h2>
      <p className='mr-6 text-[17px] text-[#b9b9bf]'>
        Elysium Metaverse provides you an immersive virtual world experience
        where you can own, shop, and explore plots (lands) as NFTs.
      </p>
      </div>
      <div className='text-sm font-semibold my-10 flex space-x-4'>
        <Button radius={"rounded-xl"} classes={"!py-3"}>
          Get Started
        </Button>
        <Button radius={"rounded-xl"} classes={"!py-3"}>
          Learn More
        </Button>
      </div>
      <div className='flex space-x-3 flex-wrap ml-3 pb-32'>
        <div className='rounded-full w-[45px] h-[45px] bg-[#6aff9c] text-white flex justify-center items-center'>
          <FaTwitter />
        </div>
        <div className='rounded-full w-[45px] h-[45px] bg-[#17b34a] text-white flex justify-center items-center'>
          <FaFacebook />
        </div>
        <div className='rounded-full w-[45px] h-[45px] bg-[#17b34a] text-white flex justify-center items-center'>
          <FaTelegramPlane />
        </div>
        <div className='rounded-full w-[45px] h-[45px] bg-[#17b34a] text-white flex justify-center items-center'>
          <FaDiscord />
        </div>
        <div className='rounded-full w-[45px] h-[45px] bg-[#17b34a] text-white flex justify-center items-center'>
          <FaInstagram />
        </div>
      </div>
    </div>
  )
}

export default Hero