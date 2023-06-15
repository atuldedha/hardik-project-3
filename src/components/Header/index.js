import React, { useState } from "react";
import Logo from "../../images/logo.jpeg";
import MenuIcon from "../../images/menuIcon.svg";

const Header = ({ handleScroll }) => {
  // menu state
  const [menuOpen, setMenuOpen] = useState(false);

  // toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center px-4 lg:px-16 xl:px-64 py-4 justify-between bg-white">
      {/* logo */}

      <div className="flex items-center space-x-4">
        <img
          src={Logo}
          alt="logo"
          className="h-7 lg:h-12 object-contain rounded-full"
        />

        <span className="text-base xl:text-lg font-inter text-blue1 font-semibold">
          Agratas Industries
        </span>
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
            <span
              className="text-sm font-inter text-white font-medium cursor-pointer"
              onClick={() => handleScroll("Home")}
            >
              Home
            </span>
            <span
              className="text-sm font-inter text-white font-medium cursor-pointer"
              onClick={() => handleScroll("About")}
            >
              About
            </span>
            <span
              className="text-sm font-inter text-white font-medium cursor-pointer"
              onClick={() => handleScroll("Products")}
            >
              Products
            </span>
            <span
              className="text-sm font-inter text-white font-medium cursor-pointer"
              onClick={() => handleScroll("Contact")}
            >
              Contact
            </span>
          </div>
        </>
      )}
      {/* middle nav tabs || desktop menu */}
      <div className="hidden lg:flex items-center space-x-6">
        <span
          className="text-base font-inter text-blue1 font-medium cursor-pointer"
          onClick={() => handleScroll("Home")}
        >
          Home
        </span>
        <span
          className="text-base font-inter text-blue1 font-medium cursor-pointer"
          onClick={() => handleScroll("About")}
        >
          About
        </span>
        <span
          className="text-base font-inter text-blue1 font-medium cursor-pointer"
          onClick={() => handleScroll("Products")}
        >
          Products
        </span>
        <span
          className="text-base font-inter text-blue1 font-medium cursor-pointer"
          onClick={() => handleScroll("Contact")}
        >
          Contact
        </span>
      </div>
    </div>
  );
};

export default Header;
