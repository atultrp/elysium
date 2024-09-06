import React from 'react'

const About = () => {
	return (
		<div className='md:flex py-20'>
			<div className='md:w-1/2 mx-5'>
				<img src="images/common/video.jpg" className='mx-auto mb-3' />
			</div>
			<div className='md:w-1/2 space-y-7 px-6 md:pr-20 md:pl-6'>
				<h2 className='text-[#17b34a] uppercase text-[32px] font-semibold'>Introducing Elysium</h2>
				<p>
					Elysium is a world scale, open-source Artificial Intelligence,Metaverse (VR) virtual reality/ (AR) Augmented Reality platform powered by Binance Blockchain it brings together the full potential of Web 3.0 and the digital world. Elysiums Metaverse platform features invite users to invest with very high quality and sustainability  in Metaverse gaming industry. The platform makes it possible for users provided with a mobile device or VR headset to live interactive augmented reality experiences customized in the real world. Elysium also allows members to purchase and trade NFT, which can then be used for buying virtual properties and real estate as well.
				</p>
			</div>
		</div>
	)
}

export default About