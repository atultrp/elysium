import React, { useEffect, useRef, useState } from 'react'
import Button from './shared/Button'
import { navItems } from '@/shared/constant'
import { useRouter } from 'next/router'
import Link from 'next/link'
import useOnClickOutside from '@/shared/useOutsideClick';
import { MdKeyboardArrowDown } from "react-icons/md";
import { scrollNavItemSmooth, setLocalStorage } from '@/shared/utils/helper';
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { IoIosArrowUp } from "react-icons/io";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import Web3 from 'web3'
import { connectWallet } from '@/shared/utils/utils'

const Header = () => {
  const router = useRouter()
  const moreRef = useRef(null);
  const [open, setOpen] = useState(false)
  const [showScroll, setShowScroll] = useState(false)
  const [showMore, setShowMore] = useState(false)

  // Wallet Connect
  const [metamaskAddress, setMetamaskAddress] = useState()

  useEffect(() => {
    const checkAccountChange = async () => {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          window.ethereum.on('accountsChanged', (accounts) => {
            setMetamaskAddress(accounts[0]);
            setLocalStorage('metamaskAddress', accounts[0])
          });
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          setMetamaskAddress(accounts[0]);
        } catch (error) {
          console.error(error);
        }
      }
    };

    checkAccountChange();

    return () => {
      if (window.ethereum) {
        window.ethereum.removeAllListeners('accountsChanged');
      }
    };
  }, []);

  useEffect(() => {
    connectWallet(setMetamaskAddress)
  }, [])

  // Scroll To Top
  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 400) {
      setShowScroll(true)
    } else if (showScroll && window.scrollY <= 400) {
      setShowScroll(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop)
    return () => window.removeEventListener('scroll', checkScrollTop)
  }, [showScroll])

  // Disables Background Scrolling whilst the SideDrawer/Modal is open
  useEffect(() => {
    if (typeof window != 'undefined' && window.document && open) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling on mount
    }
    else {
      document.body.style.overflow = 'unset'; // Allow scrolling on mount
    }
  }, [open])


  // useOnClickOutside(moreRef, () => {
  //   setShowMore(false);
  // });


  const navDivs = (classes) => navItems?.map((item, index) => {
    return (
      <div key={index} className={classes + " font-semibold text-sm w-fit scroll-smooth cursor-pointer"}>
        <div onClick={(e) => {
          scrollNavItemSmooth(e, item?.href)
          setOpen(false)
        }}>
          {item.text}
        </div>
      </div>
    )
  })

  function MobileNav({ open, setOpen }) {
    return (
      <div className={`absolute top-0 left-0 h-screen w-screen bg-[#002859] z-40 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
        {/*logo container*/}
        <div className="flex items-center pl-3 filter drop-shadow-md mt-1">
          <Link href={"/"} className='flex items-center'>
            <img src="/images/logo/logo.png" className='w-20' />
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center mt-10 max-w-52 mx-auto">
          <ul className='space-y-4'>
            {navDivs("")}
          </ul>
          {/* <Button radius={"rounded-full"}>
            {metamaskAddress || "Add Wallet"}
          </Button> */}
        </div>
      </div>
    )
  }

  return (
    <nav className={`flex items-center justify-between px-3 bg-[#002859] text-white py-1 sticky top-0 z-20 ${showScroll && "shadow-md"}`}>
      <Link href={"/"} className='flex items-center'>
        <img src="/images/logo/logo.png" className='w-20 lg:w-full' />
      </Link>
      <div className='lg:flex space-x-6 hidden'>
        {navDivs("")}
      </div>
      <div className='text-sm font-semibold space-x-3 ml-auto mr-3 md:mx-0 flex items-center'>
        <Button radius={"rounded-full "}>
          <div className='truncate px-2'>
            {metamaskAddress || "Add Wallet"}
          </div>
        </Button>
        <Link href={"ELYSIUMwhitepaper.pdf"} target="blank">
          <Button radius={"rounded-full hidden md:block"}>
            WhitePaper
          </Button>
        </Link>
      </div>
      <div className='lg:hidden flex items-center space-x-8 flex-row-reverse lg:flex-row justify-between w-fit lg:justify-normal'>
        {/* mobile nav */}
        {/* hamburger button */}
        <div className='lg:hidden'>
          <div className="z-50 flex relative w-8 h-8 flex-col justify-center space-y-2 items-center mr-3" onClick={() => {
            setOpen(!open)
          }}>
            <span className={`h-1 w-full rounded-lg bg-white transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-1.5 " : ""}`} />
            <span className={`h-1 w-full rounded-lg bg-white transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-1.5 " : ""}`} />
          </div>
          <MobileNav open={open} setOpen={setOpen} />
        </div>
        {/* Button */}

      </div>
      {showScroll && <div
        className='z-30 text-white bg-[#00deef] rounded-full fixed bottom-4 right-4 sm:bottom-5 sm:right-5 text-3xl p-3 font-bold cursor-pointer hover:scale-125 scroll-smooth ease-in-out duration-200 '
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }}
      >
        <MdOutlineKeyboardArrowUp />
      </div>}
    </nav>
  )
}

export default Header