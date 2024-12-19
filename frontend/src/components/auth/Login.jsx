/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/constant";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setloading, setUser } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
  const { loading } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!input.email || !input.password || !input.role) {
      toast("Please fill in all fields!");
      return;
    }

    try {
      dispatch(setloading(true));
      const res = await axios.post(`${USER_API_ENDPOINT}/login`, input, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      if (res.data.success) {
        dispatch(setUser(res.data.user));
        navigate("/");
        toast(`Success! ${res.data.message}`);
      }
    } catch (error) {
      console.error(error);
      toast("An error occurred. Please try again.");
    } finally {
      dispatch(setloading(false));
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
          <form onSubmit={submitHandler} className="space-y-4">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <Input
                type="email"
                id="email"
                value={input.email}
                name="email"
                onChange={changeEventHandler}
                placeholder="Enter your email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <Input
                type="password"
                id="password"
                value={input.password}
                name="password"
                onChange={changeEventHandler}
                placeholder="Enter your password"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Role Selection */}
            <div>
              <p className="text-sm font-medium text-gray-600 mb-2">
                Select Role
              </p>
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
                  <span className="text-sm text-gray-700">student</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="role"
                    value="recuriter"
                    checked={input.role === "recuriter"}
                    onChange={changeEventHandler}
                    className="cursor-pointer focus:ring focus:ring-blue-300"
                  />
                  <span className="text-sm text-gray-700">recruiter</span>
                </label>
              </div>
            </div>

            {/* Submit Button with Loading State */}
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
                "Login"
              )}
            </Button>
          </form>

          {/* Redirect to Signup */}
          <p className="text-sm text-center text-gray-600 mt-4">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
