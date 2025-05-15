import React from 'react'

export default function Weather() {
  return (
    <>
    <div className='h-screen w-full'>
      <div className='flex  justify-center   '>
      <div className='flex flex-col  mt-4 border p-10 bg-blue-500    '>
         <div className='flex flex-row items-center text-center space-x-3'>
         <hr className='w-44 border-white font-bold' />
         <h1 className='text-3xl font-bold text-white'> Weather</h1>
         </div>
         {/* left */}
        <div className='w-1/2 flex justify-start items-start'>
          <p>heloo</p>
          <img src="" alt="image" className='' />
        </div>
        {/* right */}
        <div className='w-1/2 flex justify-end items-end'>
          <h1>temprature</h1>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

