import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import React from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-white text-2xl font-bold tracking-wider">
          <span className="text-blue-500">Kabaya</span>Real Estate
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-white text-lg">
          <li className="hover:text-blue-500 transition duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-blue-500 transition duration-300">
            <Link to="/about">About Us</Link>
          </li>
          {/* <li className="hover:text-green-500 transition duration-300">
            <Link to="/register">Register</Link>
          </li> */}
          <li className="hover:text-yellow-500 transition duration-300">
            <Link to="/login">Login</Link>
          </li>
          <li className="hover:text-yellow-500 transition duration-300">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:text-purple-500 transition duration-300">
            <Link to="/apartments">Apartments</Link>
          </li>
          <li className="hover:text-red-500 transition duration-300">
            <Link to="/booking-form">Booking</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-black/50 backdrop-blur-lg py-4 space-y-4 text-white text-lg">
          <li>
            <Link to="/" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>About Us</Link>
          </li>
          {/* <li>
            <Link to="/register" className="hover:text-green-500" onClick={() => setIsOpen(false)}>Register</Link>
          </li> */}
          <li>
            <Link to="/login" className="hover:text-yellow-500" onClick={() => setIsOpen(false)}>Login</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-500" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
          <li>
            <Link to="/apartments" className="hover:text-purple-500" onClick={() => setIsOpen(false)}>Apartments</Link>
          </li>
          <li>
            <Link to="/booking-form" className="hover:text-red-500" onClick={() => setIsOpen(false)}>Booking</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;