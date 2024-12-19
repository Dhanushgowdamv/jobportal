/* eslint-disable react/jsx-no-undef */

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Browse from "./components/Browse";
import Jobs from "./components/Jobs";
import Navbar from "./components/shared/Navbar";
import Login from "./components/auth/Login";
import Home from "./components/Home";
import SignUp from "./components/auth/signUp";
import Profile from "./components/Profile";
import JobDescription from "./components/JobDescription";
import Companies from "./components/admin/Companies";
const appRouter = createBrowserRouter([
  { path: "/", element: <Home /> },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path:"/description/:id",
    element:<JobDescription/>
  },
  {
    path: "/Browser",
    element: <Browse />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  
  // admmin page

{
  path:"/admin/companies",
  element:<Companies/>
},

  
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
