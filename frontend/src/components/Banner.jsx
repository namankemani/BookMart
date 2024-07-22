// eslint-disable-next-line no-unused-vars
import React from 'react';
import Books from '../assets/Books.jpg'

const Banner = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex md:flex-row flex-col my-10'>
      <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
      <h1 className='text-4xl font-bold '>Hello, Welcome here to learn something <span className='text-purple-500'>new everyday!!!</span> </h1>
      <p className='text-xl text-left mt-6 md:mt-12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia pariatur in ratione eos dignissimos nemo, sequi excepturi magni totam molestias perspiciatis quisquam, fuga a quos enim ad perferendis et. Dolor, rem! Tempora.</p>
      <label className="input input-bordered flex items-center gap-2 md:mt-12 mt-6">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
        </svg>
        <input type="text" className="grow" placeholder="Email" />
    </label>
    <div className='mt-3'><button className="btn btn-primary">Submit</button></div>
      </div>
      <div className="order-1 md:order-2 w-full md:w-1/2">
      <img src={Books} className='w-95 h-95'  alt="" />
      </div>
    </div>
  )
}

export default Banner
