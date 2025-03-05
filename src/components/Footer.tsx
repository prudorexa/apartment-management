import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Company Info */}
          <div>
            <h2 className="text-green-500 text-xl font-bold">Our Company</h2>
            <p className="text-gray-400 mt-2">
              Providing the best services for tenants and landlords with seamless
              management solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-green-500 text-xl font-bold">Quick Links</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-green-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-green-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-green-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-green-500 text-xl font-bold">Contact Us</h2>
            <p className="text-gray-400 mt-2">Email: support@yourapp.com</p>
            <p className="text-gray-400">Phone: +123 456 7890</p>
            <p className="text-gray-400">Location: Nairobi, Kenya</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-green-400 text-lg">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 text-lg">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 text-lg">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 text-lg">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
