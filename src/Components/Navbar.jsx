import { useState } from "react";
import Hamburger from "./Hamburger";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="w-full px-4 py-3 flex items-center justify-between shadow-md relative bg-white">
      {/* Logo */}
      <h2 className="text-2xl font-bold text-[#2563eb] mb-2">SwiftXTech</h2>

      {/* Desktop Menu */}
      {/* <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Testimonials</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul> */}

      {/* Hamburger (Mobile) */}
      <div className="z-100">
        <Hamburger open={isOpen} toggle={toggleMenu} />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`fixed top-10 right-0 h-full w-64 bg-white shadow-md p-6 transform transition-transform duration-300 z-40 [&>a]:font-medium ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <a href="#" className="block py-3" onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a href="#" className="block py-3 " onClick={() => setIsOpen(false)}>
            Services
          </a>
          <a href="#" className="block py-3 " onClick={() => setIsOpen(false)}>
            About
          </a>
          <a href="#" className="block py-3 " onClick={() => setIsOpen(false)}>
            Testimonials
          </a>
          <a href="#" className="block py-3 " onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
