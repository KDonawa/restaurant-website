import { images } from "@/assets";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

function Navbar() {
  const [showMenuOverlay, setShowMenuOverlay] = useState(false);

  return (
    <div className="sticky top-0 z-40">
      <nav className=" flex h-16 items-center justify-between bg-black bg-opacity-90 px-10 py-4 sm:justify-around sm:px-0">
        {/* Logo */}
        <img src={images.gericht} alt="logo" className="t-1 h-8" />

        {/* Menu List */}
        <ul className="hidden items-center gap-4 text-xs lg:flex">
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
        <div className="hidden items-center gap-3 text-xs sm:flex">
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
      </nav>

      {/* Menu Overlay */}
      {showMenuOverlay && (
        <nav className="fixed inset-0 flex items-center justify-center bg-black">
          <MdOutlineRestaurantMenu
            className="absolute top-5 right-10 h-6 w-6 cursor-pointer text-primary hover:text-primary-light"
            onClick={closeOverlay}
          />
          <ul className="flex flex-col items-center gap-5 font-serif text-2xl text-primary">
            <li className="hover:text-primary-light" onClick={closeOverlay}>
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-primary-light" onClick={closeOverlay}>
              <a href="#about">About</a>
            </li>
            <li className="hover:text-primary-light" onClick={closeOverlay}>
              <a href="#menu">Menu</a>
            </li>
            <li className="hover:text-primary-light" onClick={closeOverlay}>
              <a href="#awards">Awards</a>
            </li>
            <li className="hover:text-primary-light" onClick={closeOverlay}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );

  function closeOverlay() {
    setShowMenuOverlay(false);
  }
}

export default Navbar;
