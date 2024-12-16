import React from 'react'
import html from './workAssets/html.svg'
import css from './workAssets/css.svg'
import bootstrap from './workAssets/bootstrap.svg'
import tailwind from './workAssets/tailwind.svg'
import sass from './workAssets/sass.svg'
import js from './workAssets/js.svg'
import react from './workAssets/react.svg'
import reactnative from './workAssets/react.svg'

const skills = [
    {
        "id": 1,
        "image": html,
        "title": "HTML 5"
    },
    {
        "id": 2,
        "image": css,
        "title": "CSS 3"
    },
    {
        "id": 3,
        "image": bootstrap,
        "title": "Bootstap"
    },
    {
        "id": 4,
        "image": tailwind,
        "title": "Tailwind CSS"
    },
    {
        "id": 5,
        "image": sass,
        "title": "SASS"
    },
    {
        "id": 6,
        "image": js,
        "title": "JavaScript"
    },
    {
        "id": 7,
        "image": react,
        "title": "React JS"
    },
    {
        "id": 8,
        "image": reactnative,
        "title": "React Native"
    }
]


function Skills() {
    // console.log(skills)
    // {
    //     skills.map((item)=>{
    //         console.log(item.title)
    //     })
    // }
    return (
        <div className='flex justify-center xl:mt-8'>
            <div className='w-4/5 2xl:px-8'>
                <div className='text-5xl sm:text-5xl font-semibold font-serif text-center'>
                    My Works Skills
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 my-10 gap-4'>
                    {
                        skills.map((item) =>
                            <div className='bg-blue-500 flex flex-col justify-center items-center py-10 rounded-3xl hover:scale-105 drop-shadow-lg'>
                                <div>
                                    <img className='w-16 h-16 object-contain' src={item.image} />
                                </div>
                                <div className='text-xl font-semibold text-white'>
                                    {item.title}
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills