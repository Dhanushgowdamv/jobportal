import React from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CompaniesTable from './CompaniesTable';
import { useNavigate } from 'react-router-dom';

const Companies = () => {
  const navigate = useNavigate();
  return (
    <div>
        <Navbar/>
        <div className=" max-w-6xl max-auto my-10 ">
         <div className=' flex items-center justify-between my-5'>
         <Input 
          className="w-fit"
          placeholder="Filter by name"
          />
          <Button onClick={()=>navigate("/admin/companies/create") } class="bg-green-500 text-white px-4 py-2 rounded-md text-lg font-medium transition-transform duration-200 hover:bg-green-600 hover:scale-105 active:bg-green-700 active:scale-95">New company</Button>
         </div>
         <CompaniesTable/>


        </div>
    </div>
  )
}                                                                                    

export default Companies