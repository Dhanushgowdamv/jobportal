import React from 'react'
import Navbar from './shared/Navbar.jsx'
import HeroSection from './HeroSection.jsx'
import CategoryCarouse from './CategoryCarouse.jsx'
import Footer from './shared/Footer.jsx'
import LatestJobs from './LatestJobs.jsx'
import useGetAllJobs from '@/hooks/useGetAllJobs.jsx'

function Home() {
  useGetAllJobs();
  return (
    <div className='px-4'>
        <Navbar/>
        <HeroSection/>
        <CategoryCarouse/>
        <LatestJobs/>
        <Footer/>
    </div>
  )
}

export default Home