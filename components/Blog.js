import Link from 'next/link'
import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa"


const Blog = () => {

	const blogData = [
		{
			img: "images/blog/blogImg1.jpeg",
			title: "Elysium Lila Metaverse Stands Out in the Virtual Ecosystem with Spectacular Features",
			desc: "Elysium Lila introduces an innovative Metaverse platform offering real-world amenities and virtual attractions. Users globally can own virtual land through Elysium Lila, engaging in various virtual activities.",
			link: "https://finance.yahoo.com/news/elysium-lila-metaverse-stands-virtual-001700330.html?guccounter=1"
		},
		{
			img: "images/blog/blogImg3.jpg",
			title: "Elysium LILA Metaverse: A Global Platform Launches Its Virtual World Ecosystem With Crypto Assets, NFTs, and DeFi",
			desc: "Elysium LILA Metaverse offers committed land ownership in the metaverse, integrating real-world amenities. Built on Binance Smart Chain, Elysium leverages blockchain for a next-gen virtual real estate experience.",
			link: "https://www.newmediawire.com/news/elysium-lila-metaverse-a-global-platform-launches-its-virtual-world-ecosystem-with-crypto-assets-nfts-and-defi-7058930"
		},
		{
			img: "images/blog/blogImg4.jpeg",
			title: "Lila Crypto",
			desc: "Grab the virtual world incorporating real-world amenities and virtual attractions with Elysium Lila Metaverse offers a unique platform for users to own virtual land and engage in various virtual activities.",
			link: "https://www.quedat.cat/lila+crypto"
		},
		{
			img: "images/blog/blogImg2.jpg",
			title: "Elysium Lila Metaverse Stands Out In The Virtual Ecosystem With Spectacular Features",
			desc: "Elysium Lila unveils an attractive Metaverse platform with real-world amenities and virtual attractions for an enchanting user experience. Elysium Lila allows global users to own virtual land in the Metaverse, offering diverse virtual activities.",
			link: "https://globalfintechseries.com/news/elysium-lila-metaverse-stands-out-in-the-virtual-ecosystem-with-spectacular-features/"
		},
	]

	const BlogCardUI = ({ blog }) => {
		return <div className="group w-full max-lg:max-w-xl md:w-5/12 lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-[#17b34a]">
			<div className="flex items-center mb-6">
				<img src={blog?.img} className="rounded-lg w-full object-cover h-40 md:h-52" />
			</div>
			<div className="block">
				<h4 className="text-gray-900 font-medium mb-2 line-clamp-2">
					{blog?.title}
				</h4>
				<div className="text-gray-900 mb-3 text-sm line-clamp-4">
					{blog?.desc}
				</div>
				<div className="flex items-center justify-between  font-medium">
					<Link href={blog?.link} target='_blank' className='hover:underline flex space-x-2'>
						<span className="text-sm text-[#17b34a]">Read More</span>
						<FaExternalLinkAlt className='text-[#17b34a]' />
					</Link>
				</div>
			</div>
		</div>
	}

	return (
		<div className='py-10' id={"blog"}>
			<div className='py-16 px-6'  >
				<h2 className='text-[#17b34a] uppercase text-[32px] font-semibold text-center mb-12'>Blogs</h2>
				<div className="flex justify-center mb-14 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between md:gap-x-8">
					{blogData?.map((blog, index) => (
						<BlogCardUI key={index} blog={blog} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Blog