import React from 'react'

const About = () => {
	return (
		<div className='md:flex py-16'>
			<div className='md:w-1/2'>
				<img src="images/common/video.jpg" className='mx-auto' />
			</div>
			<div className='md:w-1/2 space-y-7 px-6 md:pr-20 md:pl-6'>
				<h2 className='text-[#17b34a] uppercase text-[32px] font-semibold'>Introducing Elysium</h2>
				<p>
					The Elysium creats a new dimension where everything is possible with virtual reality (VR) and Augumented reality (AR) solutions empowering and entertaining to connect collectors, traders, agents, and companies. The World Scale, open-source, AR platform powered by Binance Blockchain brings together the full potential of the digitally enhanced world. The solid metaverse platform with state of the art security features invites users to invest in the metaverse, and to do so with very high quality and sustainability creating more trust and transparency in the new industry.
				</p>
				<p>
					As a supersmart metaverse digital real estate platform built on blockchain technology, Elysium introduces a next-generation Web3 experience. The platform makes it possible for users provided with a mobile device or VR headset to live interactive augmented reality experiences customized in the real world. Elysium also allows members to purchase and trade NFT, which can then be used for buying virtual properties and real estate as well.
				</p>
			</div>
		</div>
	)
}

export default About