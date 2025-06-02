import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Create from "../Pages/Create";
import ViewPin from "../Pages/ViewPin";
import Messages from "../Pages/Messages";
import Search from "../Pages/Search";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Profile from "../Pages/Profile";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pin-creation-tool" element={<Create />} />
        <Route path="/pin/:id" element={<ViewPin />} />
        <Route path="/message" element={<Messages />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </div>
  );
};

export default MainRoute;
