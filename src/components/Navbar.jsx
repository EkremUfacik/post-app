import React from "react";
import { HiBell } from "react-icons/hi";
import { BiCategory } from "react-icons/bi";
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between py-3 px-6 bg-white w-11/12 m-auto">
      <div className="flex gap-5 cursor-pointer" onClick={() => navigate("/")}>
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-800 border-4 border-blue-600">
          <AiFillPlayCircle className="text-white text-lg" />
        </div>
        <h1 className="font-bold text-xl">Arbit Blog</h1>
      </div>

      <div className="flex gap-5 items-center">
        <p className="relative font-semibold">
          Posts
          <span className="absolute left-7 bottom-4 text-xs bg-green-200 rounded-full ">
            10
          </span>
        </p>
        <HiBell className="text-xl text-gray-500" />
        <BiCategory className="text-xl text-gray-600" />
        <div className=" w-7 h-7">
          <img
            className="rounded-full"
            src="https://randomuser.me/api/portraits/men/36.jpg"
            alt=""
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
