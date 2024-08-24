import React from 'react'

const Lila = () => {
	const ListData = ["Earn exciting rewards by staking LILA tokens.", "LILA can be used to buy, sell, and trade plots in the virtual world.", "All the goods/services offered in the metaverse can be availed through LILA.", "LILA will be the in-game asset for the upcoming virtual games.", "Being a governance token, it offers holders a governance attribute.", "LILA holders will be eligible to vote for their favorite charity."]

	const List = ListData.map((item, index) => {
		return (
			<li key={index} className='flex items-center space-x-3'>
				<img src='images/check.png' className='w-5' />
				<p>{item}</p>
			</li>
		)
	}
	)

	return (
		<div>
			<h2>LILA - The Native Utility Token</h2>
			<div>
				<div>
					<h3></h3>

				</div>
				<div></div>
			</div>
		</div>
	)
}

export default Lila