import React from 'react'
import NewsItem from './NewsItem'
import Navbar from '../Navbar/Navbar'
import newsJson from './newsJson.json'
import newsImage from './newsImage.jpg'
import { useNavigate } from "react-router";

function News() {

    let navigate = useNavigate();

    let newsJsonData = newsJson.articles
    // console.log(newsJsonData)
    // newsJsonData.map(
    //     (item)=>{
    //         console.log(item.title)
    //     }
    // )
    return (
        <>
            <Navbar />
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-8 grid grid-cols-4 gap-6'>
                {
                    newsJsonData.map(
                        (item) => {
                            // console.log("News:   ", item.title);
                            return (
                                <div className='bg-white drop-shadow-lg cursor-pointer rounded-lg border-2 border-black' onClick={()=>navigate("/newsdetails")} >
                                    <div className='relative rounded-t-lg'>
                                        {
                                            item.urlToImage ?
                                                <img className='rounded-t-lg object-cover' src={item.urlToImage} alt='News' />
                                                : <img className='rounded-t-lg object-cover' src={newsImage} alt='News' />
                                        }
                                        <div className='absolute bottom-0 bg-red-600 text-white px-2 py-1'>
                                            {item.source.name}
                                        </div>
                                    </div>
                                    <div className=' px-2 rounded-b-lg'>
                                        <div>
                                            <div className='text-lg font-bold line-clamp-2 text-red-600'>
                                                {item.title}
                                            </div>
                                            {
                                                item.description ?
                                                    <div className='text-md text-justify line-clamp-5'>
                                                        {item.description}
                                                    </div>
                                                    :
                                                    <div className='text-md text-justify line-clamp-5'>
                                                        No Description
                                                    </div>
                                            }
                                        </div>
                                        <div className='text-sm font-semibold text-gray-500 py-1'>
                                            {item.publishedAt}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )
                }
                {/*<NewsItem />*/}
            </div>
        </>
    )
}

export default News