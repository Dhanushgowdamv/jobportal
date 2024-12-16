import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/constant";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setloading } from "@/redux/authSlice";

function SignUp() {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "student",
    file: "",
  });
  const { loading } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!input.fullname || !input.email || !input.phoneNumber || !input.password || !input.role) {
      toast.error("Please fill in all required fields!");
      return;
    }

    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      dispatch(setloading(true));
      const res = await axios.post(`${USER_API_ENDPOINT}/register`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An unexpected error occurred");
    } finally {
      dispatch(setloading(false));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200">
      <Navbar />
      <div className="flex items-center justify-center py-12">
        <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Create Your Account</h1>
          <form onSubmit={submitHandler} className="space-y-6">
            {/* Full Name */}
            <div>
              <Label
                htmlFor="fullname"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Full Name
              </Label>
              <Input
                type="text"
                id="fullname"
                value={input.fullname}
                name="fullname"
                onChange={changeEventHandler}
                placeholder="Enter your full name"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            {/* Email */}
            <div>
              <Label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Email Address
              </Label>
              <Input
                type="email"
                id="email"
                value={input.email}
                name="email"
                onChange={changeEventHandler}
                placeholder="Enter your email"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            {/* Phone Number */}
            <div>
              <Label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Phone Number
              </Label>
              <Input
                type="text"
                id="phoneNumber"
                value={input.phoneNumber}
                name="phoneNumber"
                onChange={changeEventHandler}
                placeholder="Enter your phone number"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            {/* Password */}
            <div>
              <Label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Password
              </Label>
              <Input
                type="password"
                id="password"
                value={input.password}
                name="password"
                onChange={changeEventHandler}
                placeholder="Create a password"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            {/* Role Selection */}
            <div>
              <p className="text-sm font-medium text-gray-600 mb-2">Select Role</p>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="role"
                    value="student"
                    checked={input.role === "student"}
                    onChange={changeEventHandler}
                    className="cursor-pointer focus:ring focus:ring-blue-300"
                  />
                  <span className="text-sm text-gray-700">workers</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="role"
                    value="recruiter"
                    checked={input.role === "recruiter"}
                    onChange={changeEventHandler}
                    className="cursor-pointer focus:ring focus:ring-blue-300"
                  />
                  <span className="text-sm text-gray-700">custmers</span>
                </label>
              </div>
            </div>

            {/* File Upload */}
            <div>
              <Label
                htmlFor="profile"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Upload Profile Picture
              </Label>
              <Input
                type="file"
                onChange={changeFileHandler}
                id="profile"
                accept="image/*"
                className="w-full border rounded-lg px-4 py-2 cursor-pointer focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            {/* Single Submit Button with Loading State */}
            <Button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              disabled={loading} // Disable the button while loading
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <Loader2 className="mr-2 h-4 animate-spin" />
                  Please wait...
                </div>
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>

          {/* Redirect to Login */}
          <p className="text-sm text-center text-gray-600 mt-6">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-500 hover:text-blue-700 transition"
            >
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
