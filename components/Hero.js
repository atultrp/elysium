import React from 'react'
import Button from './shared/Button'
import { FaTwitter, FaDiscord, FaInstagram } from "react-icons/fa6";
import { FaFacebook, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import Link from 'next/link';

const Hero = () => {
  const iconClasses = 'mt-3 mr-3 hover:scale-110 duration-300 rounded-full w-[45px] h-[45px] bg-[#17b34a] text-white flex justify-center items-center'

  return (
    <div id={"home"} className='px-3 bg-[#002859] text-white' style={{backgroundImage: "url('images/backgroup/bg-1.jpg')", backgroundPositionY: "-140px", backgroundPositionX: "-100px", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
      <div className='md:w-1/2'>
      <h2 className='pt-24 md:pt-[158px] mb-3 text-[54px] font-semibold leading-tight'>
        Be a Part of the Next Wave of Web3
      </h2>
      <p className='mr-6 text-[17px] text-[#b9b9bf]'>
      Elysium is empowering Artificial intelligence, Metaverse, gaming potential and virtual real Estate.
      </p>
      <div className='mt-4'>
        <Link href={"https://bscscan.com/token/0x948bf1441aa5c6a097917840b1a6c7bf8fd96d55"} target='_blank'>
          <span className='underline text-[#d9d9dc] break-words'>
            0x948bF1441aA5c6a097917840B1A6c7bf8fD96d55
          </span>
        </Link>
      </div>
      </div>
      <div className='text-sm font-semibold my-10 flex space-x-4'>
        <Button radius={"rounded-xl"} classes={"!py-3"}>
          Get Started
        </Button>
        <Button radius={"rounded-xl"} classes={"!py-3"}>
          Learn More
        </Button>
      </div>
      <div className='flex flex-wrap ml-3 pb-32'>
        <Link href={"https://twitter.com/elysiumlila"} target='_blank' className={iconClasses}>
          <FaTwitter />
        </Link>
        <Link href={"https://www.facebook.com/ElysiumLila"} target='_blank' className={iconClasses}>
          <FaFacebook />
        </Link>
        <Link href={"https://t.me/+H6hUskuHj89hZWJi"} target='_blank' className={iconClasses}>
          <FaTelegramPlane />
        </Link>
        <Link href={"https://discord.com/invite/Ght9xvFbKV"} target='_blank' className={iconClasses}>
          <FaDiscord />
        </Link>
        <Link href={"https://www.instagram.com/elysiumlila/"} target='_blank' className={iconClasses}>
          <FaInstagram />
        </Link>
        <Link href={"https://twitter.com/elysiumlila"} target='_blank' className={iconClasses}>
          <FaYoutube />
        </Link>
      </div>
    </div>
  )
}

export default Hero