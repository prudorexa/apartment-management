import { Link } from "react-router-dom";
import { FaBuilding, FaUsers, FaDollarSign, FaHeadset } from "react-icons/fa";
import Navbar from "../components/Navbar"; 


const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-6 md:px-20">
      <Navbar />
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-500 mt-8">About Us</h1>
        <p className="mt-4 text-lg text-gray-300">
          Simplifying apartment management with a seamless, smart, and efficient solution.
        </p>
      </div>

      {/* Main Content */}
      <div className="mt-12">
        {/* Section 1 - Introduction */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-green-400">What is Our System?</h2>
          <p className="mt-4 text-gray-300">
            Our <strong>Apartment Management System</strong> is designed to help <strong>landlords</strong> and <strong>tenants</strong> 
            manage rental properties efficiently. It provides a <strong>secure</strong> and <strong>organized</strong> way to track rent 
            payments, manage tenant records, and handle property details.
          </p>
        </div>

        {/* Section 2 - Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center space-x-4 bg-gray-800 p-6 rounded-lg shadow-md">
            <FaBuilding className="text-blue-400 text-4xl" />
            <div>
              <h3 className="text-xl font-semibold">Apartment Management</h3>
              <p className="text-gray-400">Easily add, update, and track apartment details.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 bg-gray-800 p-6 rounded-lg shadow-md">
            <FaUsers className="text-green-400 text-4xl" />
            <div>
              <h3 className="text-xl font-semibold">Tenant Management</h3>
              <p className="text-gray-400">Keep track of tenant details, move-in/move-out dates, and communication.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 bg-gray-800 p-6 rounded-lg shadow-md">
            <FaDollarSign className="text-yellow-400 text-4xl" />
            <div>
              <h3 className="text-xl font-semibold">Rent Payments</h3>
              <p className="text-gray-400">Automate rent payments and get notifications for due dates.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 bg-gray-800 p-6 rounded-lg shadow-md">
            <FaHeadset className="text-red-400 text-4xl" />
            <div>
              <h3 className="text-xl font-semibold">Support & Assistance</h3>
              <p className="text-gray-400">24/7 support to help both landlords and tenants with any issues.</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-blue-400">Need Assistance?</h2>
          <p className="mt-4 text-gray-300">We are always here to help. Contact us for any queries.</p>
          <Link to="/contact">
            <button className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
