import React from 'react'

const Newsleter = () => {
  return (
    <div className='w-full py-16 text-white'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 px-4'>
        <div className='lg:col-span-2'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'> Want tips & tricks to optimize your flow?</h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between gap-2'>
            <input type="email" placeholder='Enter your Email' className='p-3 rounded-md flex w-full text-black'  />
            <button className='bg-[#00df9a] w-[200px] md:mx-0 rounded-md my-6 mx-auto py-3 text-black font-semibold '>Get Start</button>
          </div>
          <p>We care bout the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy.</span></p>
        </div>

      </div>
    </div>
  )
}

export default Newsleter