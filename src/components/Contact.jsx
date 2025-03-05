import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-16 px-6">
      <h1 className="text-4xl font-bold text-blue-400">Contact Us</h1>
      <p className="mt-2 text-gray-300">Get in touch with us for any inquiries or support.</p>

      {/* Contact Form */}
      <div className="mt-8 w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-md">
        <form>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-semibold mb-1">Full Name</label>
            <input 
              type="text" 
              placeholder="Enter your name" 
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required 
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-semibold mb-1">Email</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required 
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-semibold mb-1">Message</label>
            <textarea 
              rows="4" 
              placeholder="Type your message here..." 
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required 
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Details & Socials */}
      <div className="mt-10 text-center">
        <p className="text-lg text-gray-300 flex items-center justify-center gap-2">
          <FaEnvelope className="text-blue-400" /> kabaya@apartmentmanager.com
        </p>
        <p className="text-lg text-gray-300 flex items-center justify-center gap-2 mt-2">
          <FaPhone className="text-green-400" /> +254 728 515 664 </p>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mt-6 text-2xl">
          <FaFacebook className="text-blue-400 hover:text-blue-500 cursor-pointer transition" />
          <FaTwitter className="text-blue-300 hover:text-blue-400 cursor-pointer transition" />
          <FaInstagram className="text-pink-400 hover:text-pink-500 cursor-pointer transition" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
