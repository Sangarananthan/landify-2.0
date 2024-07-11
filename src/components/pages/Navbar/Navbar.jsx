import React, { useState } from "react";
import Logo from "../../../assets/Icons/Logo";
import PlayStore from "../../../assets/Icons/PlayStore";
import AppStore from "../../../assets/Icons/AppStore";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex justify-between items-center px-4 lg:px-16 md:px-16 py-3 lg:py-3 md:py-3 font-inter bg-transparent  lg:backdrop-blur-2xl md:backdrop-blur-2xl lg:w-full md:w-full lg:top-0 md:top-0 z-50">
      <div className="flex items-center">
        <Logo />
        <div className="hidden md:flex space-x-8 ml-6">
          <h1 className="text-lg font-semibold cursor-pointer">Features</h1>
          <h1 className="text-lg font-semibold cursor-pointer">Pricing</h1>
          <h1 className="text-lg font-semibold cursor-pointer">Careers</h1>
          <h1 className="text-lg font-semibold cursor-pointer">Help</h1>
        </div>
      </div>
      <div className="hidden md:flex space-x-4">
        <PlayStore />
        <AppStore />
      </div>
      <div className="md:hidden" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <FaTimes className="text-2xl" />
        ) : (
          <FaBars className="text-2xl" />
        )}
      </div>
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white flex flex-col items-center py-4 shadow-lg md:hidden">
          <h1 className="text-lg font-semibold cursor-pointer py-2">
            Features
          </h1>
          <h1 className="text-lg font-semibold cursor-pointer py-2">Pricing</h1>
          <h1 className="text-lg font-semibold cursor-pointer py-2">Careers</h1>
          <h1 className="text-lg font-semibold cursor-pointer py-2">Help</h1>
          <div className="flex space-x-4 mt-4">
            <PlayStore />
            <AppStore />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
