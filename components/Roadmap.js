import React from 'react';

const Roadmap = () => {
    const roadmapData = [
        {
            quarter: 'Q3 2022',
            items: [
                'Launch whitepaper volume 1',
                'Development LILA token BEP-20',
                'Website live',
                'Development of IDO platform',
                'Initiating token private sale in 3 different phases',
                'Community development through different channels',
                'Listing of token decentralized exchanges',
                'Smart contract deployment',
            ],
        },
        {
            quarter: 'Q4 2022',
            items: [
                'BEP-721 token development',
                'IDO platform launch',
                'Public sale',
                'Listing in centralized exchanges',
                'Listing in CoinMarketCap and Coingo',
                'Metaverse development',
                'Land parcel presale',
            ],
        },
        {
            quarter: 'Q1 2023',
            items: [
                'Launch whitepaper volume 2',
                'NFT marketplace launch',
                'Land mapping',
                'Member dashboard',
                'Real estate design development',
                'Staking volume 2 launch',
                'Metaverse land primary market start',
                'Integration of secondary market for land sale',
            ],
        },
        {
            quarter: 'Q2 2023',
            items: [
                'Whitepaper volume 3 launch',
                'Assets designing and modeling',
                'Avatar creation',
                'Chat bot integration',
                'OpenSea integration',
                'AR glasses Clint ready',
                'Avatar with artificial intelligence QA',
                'Development of entertainment/gaming/party space/custom island and other',
            ],
        },
    ];

    const cardPoints = (index) => (<div>
        <ul className='mt-2 max-w-[300px]'>
            {roadmapData[index]?.items.map((item, index) => (
                <li key={index} className="mb-2 list-disc ml-5 text-sm">
                    {item}
                </li>
            ))}
        </ul>
    </div>)

    return (
        <div id={"roadmap"} className="bg-[#002859] py-16 text-white md:bg-no-repeat" style={{backgroundImage: "url('images/backgroup/bg1roadmap.png')", backgroundPosition: "bottom"}}>
            <h2 className="uppercase text-[32px] font-semibold text-center mb-8">Roadmap</h2>
            <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid max-h-screen overflow-auto">
                <div className="flex md:contents flex-row-reverse">
                    <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                        <h3 className="text-lg font-semibold lg:text-2xl">{roadmapData[0]?.quarter}</h3>
                        {cardPoints(0)}
                    </div>
                    <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                        <div className="flex items-center justify-center w-6 h-full">
                            <div className="w-1 h-full bg-[#9ac7ff] rounded-t-full bg-gradient-to-b from-[#9ac7ff] to-[#9ac7ff]">
                            </div>
                        </div>
                        <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-[#9ac7ff] rounded-full top-1/2"></div>
                    </div>
                </div>

                <div className="flex md:contents">
                    <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                        <div className="flex items-center justify-center w-6 h-full">
                            <div className="w-1 h-full bg-[#9ac7ff]"></div>
                        </div>
                        <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-[#9ac7ff] rounded-full top-1/2"></div>
                    </div>
                    <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                        <h3 className="text-lg font-semibold lg:text-2xl">{roadmapData[1]?.quarter}</h3>
                        {cardPoints(1)}
                    </div>
                </div>

                <div className="flex md:contents flex-row-reverse">
                    <div
                        className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                        <h3 className="text-lg font-semibold lg:text-2xl">{roadmapData[2]?.quarter}</h3>
                        {cardPoints(2)}
                    </div>
                    <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                        <div className="flex items-center justify-center w-6 h-full">
                            <div className="w-1 h-full bg-[#9ac7ff] rounded-t-full bg-gradient-to-b from-[#9ac7ff] to-[#9ac7ff]">
                            </div>
                        </div>
                        <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-[#9ac7ff] rounded-full top-1/2"></div>
                    </div>
                </div>

                <div className="flex md:contents">
                    <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                        <div className="flex items-center justify-center w-6 h-full">
                            <div className="w-1 h-full bg-[#9ac7ff]"></div>
                        </div>
                        <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-[#9ac7ff] rounded-full top-1/2"></div>
                    </div>
                    <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                        <h3 className="text-lg font-semibold lg:text-2xl">{roadmapData[3]?.quarter}</h3>
                        {cardPoints(3)}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Roadmap;
