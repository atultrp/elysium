import React from 'react'
import { FaTwitter, FaDiscord, FaInstagram } from "react-icons/fa6";
import { FaFacebook, FaTelegramPlane } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
	const iconClasses = 'rounded-full w-[45px] h-[45px] bg-[#17b34a] text-white flex justify-center items-center border border-white'

	return (
		<div id={"contactus"}>
			{/* Contact */}
			<div className='py-16 bg-[#0067fe] flex flex-col md:flex-row justify-around px-3 text-white' style={{ backgroundImage: "url('images/backgroup/bg-ft.png')", backgroundRepeat: "space" }}>
				<div>
					<Link href={"/"} className='flex items-center justify-center md:justify-start mb-6 md:mb-0'>
						<img src="/images/logo/logo.png" className='w-32' />
					</Link>
				</div>
				<div>
					<h2 className='text-[32px] font-semibold text-center mb-4'>
						Join our Community
					</h2>
					<Link href={"mailto:contact@elysiumlila.com"}>
						<span className='text-[#b9b9bf] hover:underline'>
							contact@elysiumlila.com
						</span>
					</Link>
				</div>

			</div>

			{/* Footer */}
			<div className='bg-[#01122e] text-white flex flex-col lg:flex-row space-y-6 lg:space-y-0 justify-between px-8 py-10 items-center'>
				<div className='flex space-x-3 flex-wrap ml-3'>
					<div className={iconClasses}>
						<FaTwitter />
					</div>
					<div className={iconClasses}>
						<FaFacebook />
					</div>
					<div className={iconClasses}>
						<FaTelegramPlane />
					</div>
					<div className={iconClasses}>
						<FaDiscord />
					</div>
					<div className={iconClasses}>
						<FaInstagram />
					</div>
				</div>
				<div className='text-[#b9b9bf]'>
					© Elysium 2022 - ALL rights reserved
				</div>
				<div className='text-[#b9b9bf]'>
					Terms and conditions | Privacy Policy
				</div>
			</div>

		</div>
	)
}

export default Footer