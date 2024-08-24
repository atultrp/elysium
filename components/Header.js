import React from 'react'
import Button from './shared/Button'
import { navItems } from '@/shared/constant'

const Header = () => {
  
  const navDivs = (classes) => navItems?.map((item, index) => {
    return (
      <div key={index} className={classes + " font-semibold text-sm"}>
        <a href={item.href}>
          {item.text}
        </a>
      </div>
    )
  })

  return (
    <nav className='flex items-center justify-between px-3 bg-[#002859] text-white py-1 sticky top-0'>
      <h1>
        <img src="images/logo/logo.png" alt="" />
      </h1>
      <div className='flex space-x-6'>
        {navDivs("")}
      </div>
      <div className='space-x-2 text-sm font-semibold'>
        <Button radius={"rounded-full"}>
          IDO
        </Button>
        <Button radius={"rounded-full"}>
          WhitePaper
        </Button>
      </div>
    </nav>
  )
}

export default Header