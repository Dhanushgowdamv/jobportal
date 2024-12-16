/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { useParams } from 'react-router-dom';
import { JOB_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import { setSingleJob } from '@/redux/jobSlice';
import { useDispatch, useSelector } from 'react-redux';

const JobDescription = (job) => {
  const isApplied = true;
  const params = useParams();
  const jobId = params.id;
  const {singleJob} = useSelector(store => store.job);
  const {user} = useSelector(store=>store.auth);
  const dispatch = useDispatch();
           
  useEffect(()=>{
    const fetchSingleJob = async () => {
        try {
            const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`,{withCredentials:true});
            console.log(res)
            if(res.data.success){
                dispatch(setSingleJob(res.data.job));
            }
        } catch (error) {
            console.log(error);
        }
    }
    fetchSingleJob(); 
},[jobId,dispatch, user?._id]);


  return (
    <div className="max-w-5xl mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
      {/* Header Section with Title and Badges */}
      <div className="flex justify-between items-center mb-8">
      <div>
                    <h1 className='font-bold text-xl'>{singleJob?.title}</h1>
                    <div className='flex items-center gap-2 mt-4'>
                        <Badge className={'text-blue-700 font-bold'} variant="ghost">{singleJob?.postion} Positions</Badge>
                        <Badge className={'text-[#F83002] font-bold'} variant="ghost">{singleJob?.jobType}</Badge>
                        <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{singleJob?.salary}LPA</Badge>
                    </div>
                </div>

        <Button
          disabled={isApplied}
          className={`py-2 px-6 text-lg font-medium rounded-lg transition-all duration-300
            ${isApplied ? 'bg-gray-500 cursor-not-allowed' : 'bg-[#7209b7] text-white hover:bg-[#5f32ad]'}`}
        >
          {isApplied ? 'Already Applied' : 'Apply Now'}
        </Button>
      </div>

      {/* Job Description Section */}
      <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
            <div className='my-4'>
                <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>{singleJob?.title}</span></h1>
                <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>{singleJob?.location}</span></h1>
                <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>{singleJob?.description}</span></h1>
                <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>{singleJob?.experience} yrs</span></h1>
                <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gray-800'>{singleJob?.salary}LPA</span></h1>
                <h1 className='font-bold my-1'>Total Applicants: <span className='pl-4 font-normal text-gray-800'>{singleJob?.applications?.length}</span></h1>
                <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gray-800'>{singleJob?.createdAt.split("T")[0]}</span></h1>
            </div>

      {/* Notes Section */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800">Additional Information:</h3>
        <p className="text-gray-600 text-sm mt-2">
          This is a full-time, remote role. We are looking for a candidate with strong proficiency in React.js, modern JavaScript, and experience in building scalable systems. The role offers ample growth opportunities within the company.
        </p>
      </div>
    </div>
  );
};

export default JobDescription;
