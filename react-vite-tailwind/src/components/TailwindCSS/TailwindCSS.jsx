import React from 'react'
import Navbar from '../Navbar/Navbar'

function TailwindCSS() {
  return (
    <>
      <Navbar />
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='font-serif text-green-500 text-xl ml-10'>TailwindCSS font-serif</div>
        <div className='font-mono text-purple-700 text-2xl ml-20'>TailwindCSS font-mono</div>
        <div className='font-extrabold text-orange-600 text-3xl ml-32'>TailwindCSS</div>
        <div className='font-light text-yellow-400 text-4xl ml-40'>TailwindCSS font-light</div>
        <div className='font-bold text-blue-600 text-5xl ml-52'>TailwindCSS font-bold</div>
        <div className='font-sans text-blue-600 text-5xl ml-60'>TailwindCSS text-5xl</div>
        <div className='font-sans text-blue-600 text-5xl ml-60 text-center'>TailwindCSS text-center</div>
        <div className='font-sans text-blue-600 text-5xl ml-60 text-center tracking-tighter	'>TailwindCSS tracking-tighter	</div>
        <div className='font-sans text-blue-600 text-5xl ml-60 text-center tracking-widest	'>TailwindCSS tracking-widest</div>
        <div className='flex space-x-5 bg-red-300 p-5'>
          <div className='w-60 p-2 h-40 bg-red-500 flex justify-center items-center'>justify-center items-center</div>
          <div className='w-60 p-2 h-40 bg-red-500 flex justify-start items-end'>justify-start items-end</div>
          <div className='w-60 p-2 h-40 bg-red-500 flex justify-end items-start'>justify-end items-start</div>
        </div>
        <div className='bg-pink-100 m-10 p-10 flex flex-col md:flex-row md:gap-x-5 gap-y-5 '>
          <div className='bg-pink-950 md:w-1/5 w-full h-20 flex justify-center items-center text-white'>Div1</div>
          <div className='bg-pink-800 md:w-1/5 w-full h-20 flex justify-center items-center text-white'>Div2</div>
          <div className='bg-pink-500 md:w-1/5 w-full h-20 flex justify-center items-center text-white'>Div3</div>
          <div className='bg-pink-400 md:w-1/5 w-full h-20 flex justify-center items-center text-white'>Div4</div>
        </div>
      </div >
    </>
  )
}

export default TailwindCSS