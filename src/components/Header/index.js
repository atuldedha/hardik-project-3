import React, { useState } from "react";
import Logo from "../../images/logo.jpg";
import MenuIcon from "../../images/menuIcon.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center px-4 lg:px-16 xl:px-64 py-4 justify-between bg-white">
      {/* logo */}

      <div className="flex items-center space-x-2">
        <img
          src={Logo}
          alt="logo"
          className="h-7 lg:h-12 object-contain rounded-full"
        />
      </div>

      {/* mobile menu icon */}
      <div
        className="p-4 flex items-center justify-center lg:hidden rounded-lg"
        style={{
          background:
            "linear-gradient(90deg, rgba(79, 172, 254, 0.6) 0%, rgba(0, 242, 254, 0.6) 100%), #2898FF",
        }}
        onClick={toggleMenu}
      >
        <img src={MenuIcon} alt="menu" className="" />
      </div>

      {/* mobile menu */}
      {menuOpen && (
        <>
          <div
            className="p-4 absolute right-5 top-5 z-20 flex items-end justify-center lg:hidden rounded-lg"
            style={{
              background:
                "linear-gradient(90deg, rgba(79, 172, 254, 0.6) 0%, rgba(0, 242, 254, 0.6) 100%), #2898FF",
            }}
            onClick={toggleMenu}
          >
            <img src={MenuIcon} alt="menu" className="" />
          </div>
          <div
            className={`p-4 absolute top-0 left-0 right-0 z-10  bg-blue12 flex flex-col items-center justify-center lg:hidden rounded-bl-lg rounded-br-lg w-full space-y-6`}
          >
            <div className="flex flex-col items-center space-y-6">
              <button
                className="flex items-center py-3 px-8 rounded-[90px] font-raleway text-sm text-white font-bold cursor-pointer"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(79, 172, 254, 0.6) 0%, rgba(0, 242, 254, 0.6) 100%), #2898FF",
                }}
              >
                Login
              </button>
            </div>
            <span className="text-sm font-inter text-white font-medium cursor-pointer">
              Home
            </span>
            <span className="text-sm font-inter text-white font-medium cursor-pointer">
              About
            </span>
            <span className="text-sm font-inter text-white font-medium cursor-pointer">
              Products
            </span>
            <span className="text-sm font-inter text-white font-medium cursor-pointer">
              Contact
            </span>
          </div>
        </>
      )}
      {/* middle nav tabs */}
      <div className="hidden lg:flex items-center space-x-6">
        <span className="text-sm font-inter text-blue1 font-medium cursor-pointer">
          Home
        </span>
        <span className="text-sm font-inter text-blue1 font-medium cursor-pointer">
          About
        </span>
        <span className="text-sm font-inter text-blue1 font-medium cursor-pointer">
          Products
        </span>
        <span className="text-sm font-inter text-blue1 font-medium cursor-pointer">
          Contact
        </span>

        <button
          className="flex items-center py-3 px-8 rounded-[90px] font-raleway text-sm text-white font-bold cursor-pointer"
          style={{
            background:
              "linear-gradient(90deg, rgba(79, 172, 254, 0.6) 0%, rgba(0, 242, 254, 0.6) 100%), #2898FF",
          }}
        >
          Log in
        </button>
      </div>
    </div>
  );
};

export default Header;
