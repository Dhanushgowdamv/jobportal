import React, { useEffect } from 'react'
import Navbar from './shared/Navbar.jsx'
import HeroSection from './HeroSection.jsx'
import CategoryCarouse from './CategoryCarouse.jsx'
import Footer from './shared/Footer.jsx'
import LatestJobs from './LatestJobs.jsx'
import useGetAllJobs from '@/hooks/useGetAllJobs.jsx'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () =>{
  useGetAllJobs();
  const {user} = useSelector(store => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if(user?.role === 'recuriter'){
      navigate("/admin/companies");

    }
  },[]);
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