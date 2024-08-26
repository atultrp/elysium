import React from 'react'

const Team = () => {

	const teamData = [
		{
			avatar: "images/common/ali.png",
			name: "Ali Hassan Al-Shaikh",
			designation: "CEO and Co founder",
		},
		{
			avatar: "images/common/lambian.png",
			name: "S.Lambian",
			designation: "COO and Co founder",
		},
		{
			avatar: "images/common/crix.png",
			name: "CRIX KONDYAH",
			designation: "CSO",
		},
		{
			avatar: "images/common/hussain.png",
			name: "Hussain bin Rashid Al Maktoum",
			designation: "2D/3D Game Developer",
		},
		{
			avatar: "images/common/veronika.png",
			name: "Veronika Gusev",
			designation: "CRA",
		},
		{
			avatar: "images/common/de-souza.png",
			name: "Salgueiro de Souza",
			designation: "CRM",
		},
		{
			avatar: "images/common/camika.png",
			name: "Camika",
			designation: "Project Co-ordinator",
		}
	]

	const advisorsData = [
		{
			avatar: "images/common/balaji.png",
			name: "Balaji",
			designation: "CEO",
		},
		{
			avatar: "images/common/aayush.png",
			name: "Aayush Mahant",
			designation: "Blockchain Consultant",
		},
		{
			avatar: "images/common/balamuralie.png",
			name: "Balamurali",
			designation: "Marketing",
		}
	]

	const teamCardUI = (data) => data.map((team, index) => {
		return (
			<div key={index} className='w-full sm:w-1/2 md:w-1/3 xl:w-1/4'>
				<div className='relative bg-[#222222] m-5'>
					<img src={team.avatar} alt={team.name} className='w-full h-[400px] object-cover' />
					<div className='absolute bottom-0 left-0 w-full bg-[#222222] text-white text-center py-4'>
						<p className='text-[18px] font-semibold hover:text-[#00deef] cursor-pointer'>{team.name}</p>
						<p className='text-[14px]'>{team.designation}</p>
					</div>
				</div>
			</div>
		)
	})

	return (
		<div className='py-16'>
			<h2 className='text-[#17b34a] uppercase text-[32px] font-semibold text-center mt-8 mb-4'>Our Team</h2>
			<div>
				<div className='flex flex-wrap mx-6'>
					{teamCardUI(teamData)}
				</div>
			</div>
			<h2 className='text-[#17b34a] uppercase text-[32px] font-semibold text-center mt-8 mb-4'>Our Advisors</h2>
			<div>
				<div className='flex flex-wrap mx-6'>
					{teamCardUI(advisorsData)}
				</div>
			</div>
		</div>
	)
}

export default Team