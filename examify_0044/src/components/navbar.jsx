// Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white  fixed top-0 p-4 w-2/3 rounded-xl  inline-block justify-center  ml-44 mt-5">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="flex justify-between items-center">
          <div>
            <img src="./examify.png" alt="" loading="lazy" className="h-8" />
          </div>
          <div className="hidden md:block">
            <a href="/register" className="text-black mr-8 font-bold text-xl">
              Join
            </a>
            <a href="/login" className="text-black font-bold text-xl">
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
