/* eslint-disable react/jsx-key */
import Job from "./Job";
import Navbar from "./shared/Navbar";

import React from 'react'
const randomjobs =[1,2,3,4]

function Browse() {
  return (
    <div className="bg-gray-50 min-h-screen ">
    <Navbar />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-bold text-2xl text-gray-800 mb-4">
            Search Results ({randomjobs.length})
        </h1>
        
        {/* Check if there are jobs to display */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {randomjobs.map((item, index) => {
                return (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <Job /> {/* Assume Job component handles job display */}
                    </div>
                );
            })}
        </div>
    </div>
</div>

  )
}

export default Browse