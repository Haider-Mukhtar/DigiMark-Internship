import React from 'react'
import newsImage from './newsImage.jpg'

function NewsItem() {
    return (
        <div className='bg-white drop-shadow-lg cursor-pointer rounded-lg'>
            <div className='relative rounded-t-lg'>
                <img className='rounded-t-lg object-cover' src={newsImage} alt='News' />
                <div className='absolute bottom-0 bg-red-600 text-white px-2 py-1'>
                    ESPN
                </div>
            </div>
            <div className='border-2 border-black border-t-0 px-2 rounded-b-lg'>
                <div>
                    <div className='text-lg font-bold line-clamp-2 text-red-600'>
                        Rockets rally by Warriors, reach NBA Cup semis - ESPN
                    </div>
                    <div className='text-md text-justify line-clamp-5'>
                        Jalen Green made two free throws with 3.5 seconds left and the Rockets beat the Warriors 91-90 on Wednesday night to advance to the NBA Cup semifinals against the Thunder in Las Vegas.
                    </div>
                </div>
                <div className='text-sm font-semibold text-gray-500 py-1'>
                    Dec 12, 2024, 12:45 AM ET
                </div>
            </div>
        </div>
    )
}

export default NewsItem