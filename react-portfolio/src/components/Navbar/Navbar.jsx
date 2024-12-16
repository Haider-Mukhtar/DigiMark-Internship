import React from 'react'
import myPic from './pic.png'
import { Link } from 'react-router'

function Navbar() {
    return (
        <div className='flex justify-center'>
            <div className='flex justify-between items-center w-4/5 2xl:px-8 py-1'>
                <Link to='/' >
                    <img className='h-14' src={myPic} alt='Profile Pic'/>
                </Link>
                <ul className='sm:flex gap-10 hidden'>
                    <li>
                        <Link to='/' className='hover:text-blue-700 hover:underline hover:underline-offset-2 '>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/about' className='hover:text-blue-700 hover:underline hover:underline-offset-2'>
                            About Me
                        </Link>
                    </li>
                    <li>
                        <a href='#' className='hover:text-blue-700 hover:underline hover:underline-offset-2'>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href='#' className='hover:text-blue-700 hover:underline hover:underline-offset-2'>
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar