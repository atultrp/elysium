import React from 'react'
import { FaTwitter, FaDiscord, FaInstagram } from "react-icons/fa6";
import { FaFacebook, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
	const iconClasses = 'mt-3 mr-3 hover:scale-110 duration-300 rounded-full w-[45px] h-[45px] bg-[#17b34a] text-white flex justify-center items-center'

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
				<div className='flex flex-wrap ml-3 justify-center md:justify-start'>
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
					<Link href={"https://youtube.com/@elysiumlilametaverse3306"} target='_blank' className={iconClasses}>
						<FaYoutube />
					</Link>
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