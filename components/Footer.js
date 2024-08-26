import React from 'react'
import { FaTwitter, FaDiscord, FaInstagram } from "react-icons/fa6";
import { FaFacebook, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
	const iconClasses = 'rounded-full w-[45px] h-[45px] bg-[#17b34a] text-white flex justify-center items-center border border-white'

	return (
		<div id={"contactus"}>
			{/* Contact */}
			{/* <div className='py-16'>

			</div> */}

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