import React from 'react'
import Navbar from '../shared/Navbar'
import { Button } from '../ui/button'
import { ArrowLeft } from 'lucide-react'

const CompanySetup = () => {
  return (
    <div><Navbar/>
    <div className="max-w-xl mx-auto my-10">
      <form action="">
        <Button>
          <ArrowLeft/>
          <span>Back</span>
        </Button>
      </form>
    </div>
    </div>
  )
}

export default CompanySetup