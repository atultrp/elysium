import React from 'react'

const Tokenomics = () => {
	const tokenDetails = [
		{
			title: 'Token Name',
			value: 'ELYSIUM'
		},
		{
			title: 'Token Symbol',
			value: 'LILA'
		},
		{
			title: 'Token Type',
			value: 'BEP-20'
		},
		{
			title: 'Total Token Supply',
			value: '500,000,000'
		},
		{
			title: 'Decimal Support',
			value: '18'
		},
		{
			title: 'Burnable',
			value: 'YES'
		},
		{
			title: 'Soft Cap',
			value: '$600,000'
		},
		{
			title: 'Hard Cap',
			value: '$1,250,000'
		},
	]

	const rounds = [
    { round: 'ROUND 1', tokens: 20000000, price: 0.005, total: 100000 },
    { round: 'ROUND 2', tokens: 20000000, price: 0.01, total: 200000 },
    { round: 'ROUND 3', tokens: 10000000, price: 0.03, total: 300000 },
  ];

  const totalTokens = rounds.reduce((acc, round) => acc + round.tokens, 0);
  const totalPrice = rounds.reduce((acc, round) => acc + round.total, 0);

	const allocations = [
    { stage: 'Private Sale', allocation: '10%', listing: '10%', cliff: '6', vesting: '12', release: '7.5%' },
    { stage: 'Public Sale (IDO)', allocation: '8%', listing: '100%', cliff: '-', vesting: '-', release: '-' },
    { stage: 'Operational', allocation: '10%', listing: '0%', cliff: '-', vesting: '24', release: '4.17%' },
    { stage: 'Partnerships', allocation: '12%', listing: '20%', cliff: '6', vesting: '24', release: '3.33%' },
    { stage: 'Airdrop', allocation: '3%', listing: '100%', cliff: '-', vesting: '-', release: '-' },
    { stage: 'Advisors & Team', allocation: '10%', listing: '0%', cliff: '6', vesting: '36', release: '2.77%' },
    { stage: 'Reward Pool', allocation: '37%', listing: '0%', cliff: '12', vesting: '1', release: 'Non-linear release' },
    { stage: 'Reserve', allocation: '10%', listing: '10%', cliff: '-', vesting: '36', release: '2.50%' },
  ];

  const totalAllocation = '100%';

	const tokenDetailTable = tokenDetails.map((item, index) => {
		return (
			<div className='flex justify-between'>
				<p className='w-1/2'>{item.title}</p>
				<div className='flex w-1/2'>
					<p>:</p>
					<p className='ml-8'>{item.value}</p>
				</div>
			</div>
		)
	})

	const privateSaleTable = (<div className="bg-[#133968] p-6 rounded-lg w-full max-w-4xl min-w-[500px]">
		<div className="grid grid-cols-4 text-white font-bold">
			<div className="bg-[#00deef] p-4">ROUND</div>
			<div className="bg-[#00deef] p-4">NO. OF TOKENS</div>
			<div className="bg-[#00deef] p-4">PRICE (USD)</div>
			<div className="bg-[#00deef] p-4">NO. OF TOKENS * PRICE</div>
		</div>
		{rounds.map((round, index) => (
			<div
				key={index}
				className="grid grid-cols-4 text-white border-b border-[#133968]"
			>
				<div className="p-4">{round.round}</div>
				<div className="p-4">{round.tokens.toLocaleString()}</div>
				<div className="p-4">{round.price.toFixed(3)}</div>
				<div className="p-4">${round.total.toLocaleString()}</div>
			</div>
		))}
		<div className="grid grid-cols-4 text-white font-bold bg-[#00deef]">
			<div className="p-4">TOTAL</div>
			<div className="p-4">{totalTokens.toLocaleString()}</div>
			<div className="p-4"></div>
			<div className="p-4">${totalPrice.toLocaleString()}</div>
		</div>
	</div>)

	const tokenEconomicsTable = (<div className="bg-[#133968] p-6 rounded-lg w-full max-w-5xl min-w-[800px]">
		<div className="grid grid-cols-6 text-white font-bold">
			<div className="bg-cyan-400 p-4">Stage</div>
			<div className="bg-cyan-400 p-4">Token Allocation %</div>
			<div className="bg-cyan-400 p-4">Listing Release</div>
			<div className="bg-cyan-400 p-4">Cliff (Months)</div>
			<div className="bg-cyan-400 p-4">Vesting (Months)</div>
			<div className="bg-cyan-400 p-4">Monthly Release</div>
		</div>
		{allocations.map((allocation, index) => (
			<div
				key={index}
				className={`grid grid-cols-6 text-white ${index !== allocations.length - 1 ? 'border-b border-blue-900' : ''}`}
			>
				<div className="p-4">{allocation.stage}</div>
				<div className="p-4">{allocation.allocation}</div>
				<div className="p-4">{allocation.listing}</div>
				<div className="p-4">{allocation.cliff}</div>
				<div className="p-4">{allocation.vesting}</div>
				<div className="p-4">{allocation.release}</div>
			</div>
		))}
		<div className="grid grid-cols-6 text-white font-bold bg-cyan-400">
			<div className="p-4">Total</div>
			<div className="p-4">{totalAllocation}</div>
			<div className="p-4"></div>
			<div className="p-4"></div>
			<div className="p-4"></div>
			<div className="p-4"></div>
		</div>
	</div>)


	return (
		<div className='bg-[#002859] py-16 text-white'>
			<h2 className='uppercase text-[32px] font-semibold text-center mb-8'>Tokenomics</h2>

			<div>
				<h3 className='font-semibold text-lg max-w-xs mx-auto mb-8'>Token Details</h3>
				<div className='max-w-xs mx-auto my-2 bg-[#133968] border border-[#9ac7ff] p-8 space-y-4'>
					{tokenDetailTable}
				</div>
			</div>

			<h3 className='font-semibold text-lg w-full max-w-4xl mx-auto my-8 ml-6 md:ml-auto'>Private Sale</h3>
			<div className='md:mx-auto md:w-fit overflow-scroll ml-3'>
				{privateSaleTable}
			</div>

			<h3 className='font-semibold text-lg w-full max-w-5xl mx-auto my-8 ml-6 md:ml-auto'>Token Economics</h3>
			<div className='md:mx-auto md:w-fit overflow-scroll ml-3'>
				{tokenEconomicsTable}
			</div>

			<div className='mx-auto w-fit mt-8'>
				<img src="images/backgroup/tokenomics.png" alt="" />
			</div>
		</div>
	)
}

export default Tokenomics