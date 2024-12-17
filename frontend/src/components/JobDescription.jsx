import React, { useEffect, useState } from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';
import { setSingleJob } from '@/redux/jobSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';

const JobDescription = () => {
    const { singleJob } = useSelector(store => store.job);
    const { user } = useSelector(store => store.auth);
    const isIntiallyApplied = singleJob?.applications?.some(application => application.applicant === user?._id) || false;
    const [isApplied, setIsApplied] = useState(isIntiallyApplied);

    const params = useParams();
    const jobId = params.id;
    const dispatch = useDispatch();

    const applyJobHandler = async () => {
      try {
          const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, { withCredentials: true });
  
          if (res.data.success) {
              setIsApplied(true); // Update the local state
              const updatedSingleJob = { ...singleJob, applications: [...singleJob.applications, { applicant: user?._id }] };
              dispatch(setSingleJob(updatedSingleJob)); // helps us to real time UI update
              console.log('Success response:', res.data.message);
              toast.success(res.data.message);
          }
      } catch (error) {
          console.log('Error response:', error.response?.data?.message || error);
          toast.error(error.response?.data?.message || 'Something went wrong');
      }
  }
  

    useEffect(() => {
        const fetchSingleJob = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setSingleJob(res.data.job));
                    setIsApplied(res.data.job.applications.some(application => application.applicant === user?._id)) // Ensure the state is in sync with fetched data
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchSingleJob();
    }, [jobId, dispatch, user?._id]);

    return (
        <div className="max-w-7xl mx-auto my-10 px-4 sm:px-6 lg:px-8">
            {/* Job Title and Badges Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white p-6 rounded-xl shadow-lg mb-8">
                <div>
                    <h1 className="font-extrabold text-2xl sm:text-3xl text-gray-800 mb-4">{singleJob?.title}</h1>
                    <div className="flex items-center gap-4 mt-2">
                        <Badge className="text-blue-700 font-semibold py-2 px-4 rounded-md shadow-sm transition duration-300 hover:bg-blue-50" variant="ghost">{singleJob?.postion} Positions</Badge>
                        <Badge className="text-[#F83002] font-semibold py-2 px-4 rounded-md shadow-sm transition duration-300 hover:bg-[#F83002]/20" variant="ghost">{singleJob?.jobType}</Badge>
                        <Badge className="text-[#7209b7] font-semibold py-2 px-4 rounded-md shadow-sm transition duration-300 hover:bg-[#7209b7]/20" variant="ghost">{singleJob?.salary} LPA</Badge>
                    </div>
                </div>
                <Button
                    onClick={isApplied ? null : applyJobHandler}
                    disabled={isApplied}
                    className={`mt-4 sm:mt-0 rounded-lg text-white ${isApplied ? 'bg-gray-500 cursor-not-allowed' : 'bg-[#7209b7] hover:bg-[#5f32ad] transition-all duration-300 transform hover:scale-105'}`}
                    style={{ minWidth: "150px" }}
                >
                    {isApplied ? 'Already Applied' : 'Apply Now'}
                </Button>
            </div>

            {/* Job Description Section */}
            <div className="space-y-8 ">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Job Description</h2>
                <div className="space-y-5">
                    <div className="flex items-center  border-b border-gray-200 py-3 px-4">
                        <span className="font-medium text-gray-700">Role:</span>
                        <span className="text-gray-800">{singleJob?.title}</span>
                    </div>
                    <div className="flex items-center  border-b border-gray-200 py-3 px-4">
                        <span className="font-medium text-gray-700">Location:</span>
                        <span className="text-gray-800">{singleJob?.location}</span>
                    </div>
                    <div className="flex items-center  border-b border-gray-200 py-3 px-4">
                        <span className="font-medium text-gray-700">Description:</span>
                        <span className="text-gray-800 font-semibold">{singleJob?.description}</span>
                    </div>
                    <div className="flex items-center  border-b border-gray-200 py-3 px-4">
                        <span className="font-medium text-gray-700">Experience:</span>
                        <span className="text-gray-800 font-semibold">{singleJob?.experience} years</span>
                    </div>
                    <div className="flex items-center  border-b border-gray-200 py-3 px-4">
                        <span className="font-medium text-gray-700">Salary:</span>
                        <span className="text-gray-800 font-semibold">{singleJob?.salary} LPA</span>
                    </div>
                    <div className="flex items-center  border-b border-gray-200 py-3 px-4">
                        <span className="font-medium text-gray-700">Total Applicants:</span>
                        <span className="text-gray-800 font-semibold">{singleJob?.applications?.length}</span>
                    </div>
                    <div className="flex items-center  py-3 px-4">
                        <span className="font-medium text-gray-700">Posted Date:</span>
                        <span className="text-gray-800 font-semibold">{singleJob?.createdAt.split("T")[0]}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobDescription;