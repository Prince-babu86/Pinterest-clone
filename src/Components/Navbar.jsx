import React, { useContext } from "react";
import { PinterstData } from "../Context/Wrapper";

const Navbar = () => {
  let { theme, settheme } = useContext(PinterstData);

  return (
    <div className={`navbar w-full h-[95px] py-2 z-[130] px-4 flex  fixed ${theme === "dark" ? "bg-black" : "bg-white"}`}>
      <div className="w-full flex items-center gap-5">
        <div className={`search w-[85vw] flex items-center px-4 h-[55px] ${theme === "dark" ? "bg-[#212121]" : "bg-[#F1F1F1]"} rounded-xl`}>
          <i className="ri-search-line text-xl text-[#858585]"></i>
          <input
            className={`h-full w-full px-2 outline-none placeholder:${theme === "dark" ? "text-white" : "text-black"}`}
            type="text"
            placeholder="Search"
          />
        </div>

        <div className="profilelogos flex gap-2 items-center">
          <img
            className="w-9 h-9 rounded-full object-cover object-top"
            src="https://i.pinimg.com/736x/26/0e/93/260e93bee14246e467362cccc44437f9.jpg"
            alt=""
          />
          <i className="ri-arrow-down-s-line text-3xl cursor-pointer"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
