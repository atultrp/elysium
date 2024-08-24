import React from 'react'

const Lila = () => {
	const ListData = ["Earn exciting rewards by staking LILA tokens.", "LILA can be used to buy, sell, and trade plots in the virtual world.", "All the goods/services offered in the metaverse can be availed through LILA.", "LILA will be the in-game asset for the upcoming virtual games.", "Being a governance token, it offers holders a governance attribute.", "LILA holders will be eligible to vote for their favorite charity."]

	const List = ListData.map((item, index) => {
		return (
			<li key={index} className='flex items-center space-x-3 my-4'>
				<img src='images/common/ic1.png' className='w-5' />
				<p className='font-light'>{item}</p>
			</li>
		)
	}
	)

	return (
		<div className='py-16 px-16'>
			<h2 className='text-[#17b34a] uppercase text-[32px] font-semibold text-center'>LILA - The Native Utility Token</h2>
			<div className='md:flex'>
				<div className='w-2/3'>
					<h3 className='text-xl font-semibold my-10'>LILA is the indigenous token of the Elysium universe. It is a BEP-20 standard token built on the robust Binance Smart Chain network. The following are the utilities offered by the LILA token.</h3>
					<ul>
						{List}
					</ul>
				</div>
				<div className='w-1/3 mt-auto ml-auto'>
					<img src="images/common/benefits.png" alt="" />
				</div>
			</div>
		</div>
	)
}

export default Lila