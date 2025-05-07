import { FaBuilding, FaUsers, FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"; 


const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[500px] flex flex-col justify-center items-center text-center px-6"
        style={{
          backgroundImage: "url('https://source.unsplash.com/1600x900/?apartment,buildings')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-400">Apartment Management System</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            Simplify property management with a seamless and efficient platform.
          </p>
          <div className="mt-6 space-x-4">
            <Link to="/register">
              <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition">
                Register Now
              </button>
            </Link>
            <Link to="/about">
              <button className="px-6 py-3 border border-white hover:bg-white hover:text-black rounded-lg transition">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-semibold text-green-400">Why Choose Us?</h2>
        <p className="mt-2 text-gray-300">Our platform offers the best solutions for managing apartments and tenants.</p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-md">
            <FaBuilding className="text-blue-400 text-5xl" />
            <h3 className="text-xl font-semibold mt-4">Efficient Management</h3>
            <p className="text-gray-400 mt-2">Manage apartments, tenants, and rental details effortlessly.</p>
          </div>

          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-md">
            <FaUsers className="text-green-400 text-5xl" />
            <h3 className="text-xl font-semibold mt-4">Tenant-Friendly</h3>
            <p className="text-gray-400 mt-2">Easy-to-use portal for tenants to view rent details and make payments.</p>
          </div>

          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-md">
            <FaDollarSign className="text-yellow-400 text-5xl" />
            <h3 className="text-xl font-semibold mt-4">Secure Payments</h3>
            <p className="text-gray-400 mt-2">Track and process rent payments securely and efficiently.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
