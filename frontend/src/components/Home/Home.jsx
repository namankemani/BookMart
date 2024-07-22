import React from 'react'
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import Free from '../../components/Free';
import Footer from '../../components/Footer';
const Home = () => {
  return (
    <div>

    <Navbar/>
    <Banner/>
    <Free/>
    <hr className='mt-20' />
    <Footer/>
    </div>
  )
}

export default Home
