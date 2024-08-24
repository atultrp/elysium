import React from 'react'

const Elysiums = () => {

	const cardData = [
		{
			icon: 'images/e1.png',
			title: 'Virtual Malls',
			desc: 'The platform redefines shopping by building virtual malls in the metaverse.'
		},
		{
			icon: 'images/e2.png',
			title: 'Temple',
			desc: 'Connect with your spiritual meditations and traditional worship by visiting temples, mosques, and churches in the metaverse.'
		},
		{
			icon: 'images/e3.png',
			title: 'Event Space',
			desc: 'Large crowd gatherings, get-togethers, exhibitions, small team building activities and a lot more are possible.'
		},
		{
			icon: 'images/e4.png',
			title: 'Music Concerts',
			desc: 'A great opportunity for indie musicians to showcase their talent as Elysium will organize music concerts in the metaverse.'
		},
		{
			icon: 'images/e5.png',
			title: 'E-Commerce Advertising Space',
			desc: 'Take your brand promotions to the next level by advertising them on the virtual billboards and banners.'
		},
		{
			icon: 'images/e6.png',
			title: 'Virtual Race Course',
			desc: "Elysium's metaverse will seize the attention of race lovers by providing a virtual race course on its platform."
		},
		{
			icon: 'images/e7.png',
			title: 'Virtual Cruises',
			desc: 'Witness an immersive experience on a virtual cruise with all the amenities such as restaurants, bars, cafes, theaters, and spas.'
		},
		{
			icon: 'images/e8.png',
			title: 'Gaming Platforms',
			desc: "Monetize your gameplay with Elysium's play-to-earn games and earn rewards in cryptos."
		},
	]

	const cards = cardData.map((card, index) => {
		return (
			<div key={index} className=' text-white md:w-1/4 p-4  hover:scale-105 duration-300' style={{filter: "drop-shadow(0 0 5px #466995)"}}>
				<div className='rounded-t-full bg-[#120517] w-fit mx-auto'>
					<img src={card.icon} className='mx-auto p-4' />
				</div>
				<div className='bg-[#120517] rounded-xl -mt-12 px-5 py-5 min-h-[200px]'>
					<h3 className='text-xl font-semibold text-center pt-5'>{card.title}</h3>
					<p className='text-sm mt-3 text-center'>{card.desc}</p>
				</div>
			</div>
		)
	}
	)

	return (
		<div className='bg-[#002859] py-16 text-white' style={{backgroundImage: "url('images/backgroup/ecobg.jpg')"}}>
			<h2 className='text-center font-semibold text-4xl pb-6 uppercase'>Elysium's Privileges</h2>
			<div className='flex flex-wrap mx-8'>{cards}</div>
		</div>
	)
}

export default Elysiums