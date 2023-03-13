import { images } from "@/assets";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

function Navbar() {
  const [showMenuOverlay, setShowMenuOverlay] = useState(false);

  return (
    <nav className="flex h-16 items-center justify-between px-10 py-4 sm:justify-around sm:px-0">
      {/* Logo */}
      <img src={images.gericht} alt="logo" className="t-1 h-8" />

      {/* Menu List */}
      <ul className="text-1 hidden items-center gap-4 lg:flex">
        <li className="border-b-primary py-1 px-1.5 hover:border-b hover:text-primary">
          <a href="#home">Home</a>
        </li>
        <li className="border-b-primary py-1 px-1.5 hover:border-b hover:text-primary">
          <a href="#about">About</a>
        </li>
        <li className="border-b-primary py-1 px-1.5 hover:border-b hover:text-primary">
          <a href="#menu">Menu</a>
        </li>
        <li className="border-b-primary py-1 px-1.5 hover:border-b hover:text-primary">
          <a href="#awards">Awards</a>
        </li>
        <li className="border-b-primary py-1 px-1.5 hover:border-b hover:text-primary">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* Call to Action */}
      <div className="text-1 hidden items-center gap-3 sm:flex">
        <a
          className="border-b-primary py-1 px-1.5 hover:border-b hover:text-primary"
          href="#login"
        >
          Login / Registration
        </a>

        {/* Separator */}
        <div className="flex flex-col">
          <div className="h-[17px] w-[1px] bg-gradient-to-t from-gray-dark to-black" />
          <div className="h-[17px] w-[1px] bg-gradient-to-b from-gray-dark to-black" />
        </div>

        <a
          className="border-b-primary py-1 px-1.5 hover:border-b hover:text-primary"
          href="/"
        >
          Book Table
        </a>
      </div>

      {/* Menu Button */}
      <div
        className="cursor-pointer rounded-full p-2 hover:bg-gray-900 lg:hidden"
        onClick={() => setShowMenuOverlay(true)}
      >
        <GiHamburgerMenu className="h-5 w-5 text-primary" />
      </div>

      {/* Menu Overlay */}
      {showMenuOverlay && (
        <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-black ">
          <MdOutlineRestaurantMenu
            className="absolute top-5 right-10 h-6 w-6 cursor-pointer text-primary hover:text-primary-light"
            onClick={() => setShowMenuOverlay(false)}
          />
          <ul className="flex flex-col items-center gap-5 font-serif text-2xl text-primary">
            <li className="hover:text-primary-light">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-primary-light">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-primary-light">
              <a href="#menu">Menu</a>
            </li>
            <li className="hover:text-primary-light">
              <a href="#awards">Awards</a>
            </li>
            <li className="hover:text-primary-light">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
