import React, { useState } from "react";
// import Logo from "../../images/logo.jpeg";
import Logo from "../../images/new_logo.png";
import MenuIcon from "../../images/menuIcon.svg";

const Header = ({ handleScroll }) => {
  // menu state
  const [menuOpen, setMenuOpen] = useState(false);

  // toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center px-4 lg:px-16 xl:px-64 py-2 justify-between bg-white">
      {/* logo */}
      <div className="flex items-center space-x-4">
        <img
          src={Logo}
          alt="logo"
          className="h-7 lg:h-16 object-contain rounded-full"
        />

        <span
          className="text-xl xl:text-2xl font-poppins text-blue1 font-bold"
          style={{
            backgroundImage:
              "linear-gradient(270.81deg, #028586 0%, #00aabf 47.26%, #028586 100%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Amaxa Tech Solutions
        </span>
      </div>
      {/* mobile menu icon */}
      <div
        className="p-4 flex items-center justify-center lg:hidden rounded-lg"
        style={{
          background:
            "linear-gradient(90deg, #028586 0%, #00aabf 100%), #028586",
        }}
        onClick={toggleMenu}
      >
        <img src={MenuIcon} alt="menu" className="" />
      </div>

      {/* mobile menu */}
      <div
        className={`${
          menuOpen
            ? "opacity-100 translate-x-400 z-[100]"
            : "opacity-0 -translate-x-[2000px] -z-[1]"
        } transition-all ease-in-out duration-500 p-4 absolute top-14 left-0 right-0 z-10  bg-bgColor4 flex flex-col items-center justify-center lg:hidden rounded-bl-lg rounded-br-lg w-full space-y-6`}
      >
        <span
          className="text-sm font-poppins text-white font-normal cursor-pointer"
          onClick={() => handleScroll("Home")}
        >
          Home
        </span>
        <span
          className="text-sm font-poppins text-white font-normal cursor-pointer"
          onClick={() => handleScroll("About")}
        >
          About
        </span>
        <span
          className="text-sm font-poppins text-white font-normal cursor-pointer"
          onClick={() => handleScroll("Products")}
        >
          Products
        </span>
        <span
          className="text-sm font-poppins text-white font-normal cursor-pointer"
          onClick={() => handleScroll("Contact")}
        >
          Contact
        </span>
      </div>

      {/* middle nav tabs || desktop menu */}
      <div className="hidden lg:flex items-center space-x-6">
        <span
          className="text-base font-poppins text-blue1 font-normal cursor-pointer"
          onClick={() => handleScroll("Home")}
        >
          Home
        </span>
        <span
          className="text-base font-poppins text-blue1 font-normal cursor-pointer"
          onClick={() => handleScroll("About")}
        >
          About
        </span>
        <span
          className="text-base font-poppins text-blue1 font-normal cursor-pointer"
          onClick={() => handleScroll("Products")}
        >
          Products
        </span>
        <span
          className="text-base font-poppins text-blue1 font-normal cursor-pointer"
          onClick={() => handleScroll("Contact")}
        >
          Contact
        </span>
      </div>
    </div>
  );
};

export default Header;
