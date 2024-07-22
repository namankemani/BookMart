import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import Course from './Course';

const Courses = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen">
        <Course/>
    </div>
    <hr className='mt-20' />
    <Footer/>
    </>
  )
}

export default Courses

