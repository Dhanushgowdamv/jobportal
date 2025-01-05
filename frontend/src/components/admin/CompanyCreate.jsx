import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setSingleCompany } from "@/redux/companySlice";

const CompanyCreate = () => {
    const navigate = useNavigate();
    const [companyName , setCompanyName] = useState();
    const registerNewCompany = async ()=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();
        try {
            // eslint-disable-next-line no-undef
            const res = await axios.post(`${COMPANY_API_END_POINT}/register`,{companyName},{
                headers:{
                    'Content-Type':'application/json'
                },
                withCredentials:true
            });
            if(res?.data?.success){
                dispatch(setSingleCompany(res.data.company))
                toast.success(res.data.message);
                const companyId = res?.data?.company?._id;
                navigate(`/admin/companies/${companyId}`);

            }
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <div className="my-10 ">
          <h1 className="font-bold text-2xl"> Your Comapany Name</h1>
          <p className="text-gray-500 ">
            What Would you like to give your company name? you can change this
            later{" "}
          </p>
        </div>
        <Label>Company Name</Label>
        <Input
          type="text"
          className="my-2"
          placeholder="job hunt , microsoft ......etc "
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <div className="flex items-center gap-2 my-10">
          <button onClick={() =>navigate("/admin/companies")} className="bg-gray-500 text-white px-4 py-2 rounded-md text-lg font-medium transition-transform duration-200 hover:bg-gray-600 hover:scale-105 active:bg-gray-700 active:scale-95">
            Cancel
          </button>

          <button onClick={registerNewCompany} className="bg-green-500 text-white px-4 py-2 rounded-md text-lg font-medium transition-transform duration-200 hover:bg-green-600 hover:scale-105 active:bg-green-700 active:scale-95">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyCreate;
