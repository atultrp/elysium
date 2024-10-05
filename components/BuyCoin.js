import React, { useState } from 'react'
import Button from './shared/Button'
import BuyCard from './shared/BuyCard'

const BuyCoin = () => {
    const handleSubmit = () => {
        console.log('Buy Elysiums')
    }

    return (
        <div id={"buyElysiums"} className='py-12 md:px-16 px-4'>
            <div className='py-16'>
                <h2 className='text-[#17b34a] uppercase text-[32px] font-semibold text-center'>Buy Elysiums</h2>
                <BuyCard handleSubmit={handleSubmit}/>
            </div>
        </div>
    )
}

export default BuyCoin