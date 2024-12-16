/* eslint-disable react/jsx-no-undef */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useDispatch, useSelector } from "react-redux";
import store from "@/redux/store";
import { LogOut, User2 } from "lucide-react";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_ENDPOINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between py-4 px-16 bg-gray-100 shadow-md">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Job <span className="text-[#f83002]">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <ul className="flex font-medium items-center gap-5 text-gray-600">
            <li className="hover:text-[#f83002] cursor-pointer transition-all duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-[#f83002] cursor-pointer transition-all duration-300">
              <Link to="jobs">Jobs</Link>
            </li>
            <li className="hover:text-[#f83002] cursor-pointer transition-all duration-300">
              <Link to="Browser">Browser</Link>
            </li>
          </ul>
          {!user ? (
            <div className="flex items-center gap-4">
              <Link to="/login">
                <Button
                  variant="outline"
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:text-[#f83002]  bg-gray-100 focus:outline-none transition-all duration-300"
                >
                  Login
                </Button>
              </Link>
              <Link to="/signUP">
                <Button className="px-4 py-2   bg-[#6430bd] text-white rounded-md hover:text-[#f83002]   focus:outline-none transition-all-300 duration-300">
                  Sign Up
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src={user.profile.profilePhoto}
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="bg-white shadow-lg rounded-md p-4 w-64">
                <div className="flex items-center gap-3">
                  <Avatar className="cursor-pointer w-12 h-12">
                    <AvatarImage
                      src={user.profile.profilePhoto}
                      alt="@shadcn"
                      className="rounded-full"
                    />
                    <AvatarFallback className="flex items-center justify-center bg-gray-200 text-gray-800 font-medium rounded-full w-full h-full">
                      CN
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {user?.fullname}
                    </h4>
                    <p className="text-sm text-gray-500">{user?.profile.bio}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <Button
                    variant="link"
                    className="flex items-center justify-start w-full text-left hover:bg-red-50 px-3 py-2 rounded-md"
                  >
                    <Link to="/profile" className="flex items-center">
                      <User2 className="mr-2" />{" "}
                      {/* Add margin-right for spacing */}
                      View Profile
                    </Link>
                  </Button>

                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut />
                    <Button onClick={logoutHandler} variant="Link">
                      Logout
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;