import React, { useState } from 'react'
import Button from './shared/Button'
import BuyCard from './shared/BuyCard'

const BuyCoin = () => {
    const cubeSrc = "data:image/png;base64,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"

    const handleSubmit = () => {
        console.log('Buy Elysiums')
    }
    

    return (
        <div id={"buyElysiums"} className='py-12 md:px-16 px-4'>
            <div className='py-16'>
                <img className="bg-shape1 -mt-40 md:-mt-20" style={{ right: "4%", width: "120px" }} src={cubeSrc} />
                <h2 className='text-[#17b34a] uppercase text-[32px] font-semibold text-center'>Buy Elysiums</h2>
                <BuyCard handleSubmit={handleSubmit}/>
                <img className="bg-shape1" style={{ left: "4%", width: "80px" }} src={cubeSrc} />
            </div>
        </div>
    )
}

export default BuyCoin