import React from 'react'
import Intro from './Intro'
import Skills from '../Work/Skills'
import Education from '../About/Education'
import Experience from '../About/Experience'

function Home() {
    return (
        <div className=''>
        {/*
            */}
            <Intro />
            <Skills />
            <Education />
            <Experience />
        </div>
    )
}

export default Home