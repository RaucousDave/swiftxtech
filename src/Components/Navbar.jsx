import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"; // Import faBars and faTimes

function Navbar({ scrollToSection, refs }) {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the menu
  const toggleMenu = () => setIsOpen((prev) => !prev); // Toggle the state
  const { heroRef, aboutRef, testimonialsRef, servicesRef } = refs;

  return (
    <nav className="w-full px-4 py-3 flex items-center justify-between shadow-md relative bg-white">
      {/* Logo */}
      <h2 className="text-2xl font-bold text-[#2563eb] mb-2">SwiftXTech</h2>

      {/* Hamburger Icon (Mobile) */}
      <div className="z-100 ">
        {" "}
        {/* Only show on mobile */}
        <FontAwesomeIcon
          icon={isOpen ? faTimes : faBars} // Toggle between faBars and faTimes
          onClick={toggleMenu}
          className={`text-2xl cursor-pointer transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`} // Add rotation on isOpen
        />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`fixed top-10 right-0 h-full w-64 bg-white shadow-md p-6 transform transition-transform duration-300 z-40`}
        >
          <a
            href="#"
            className="block py-3"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              scrollToSection(heroRef);
            }}
          >
            Home
          </a>
          <a
            href="#"
            className="block py-3"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              scrollToSection(servicesRef);
            }}
          >
            Services
          </a>
          <a
            href="#"
            className="block py-3"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              scrollToSection(aboutRef);
            }}
          >
            About
          </a>
          <a
            href="#"
            className="block py-3"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              scrollToSection(testimonialsRef);
            }}
          >
            Testimonials
          </a>
          <a
            href="#"
            className="block py-3"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              scrollToSection("contact");
            }}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
