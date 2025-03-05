import { useState } from "react";
import axios from "axios";

const BookingForm = ({ apartmentId, apartmentName }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    agreementAccepted: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.agreementAccepted) {
      setMessage("⚠ Please accept the rental agreement before booking.");
      return;
    }
    setIsSubmitting(true);
    try {
      await axios.post("http://localhost:5000/api/bookings", {
        ...formData,
        apartmentId,
      });
      setMessage("✅ Booking request submitted successfully!");
    } catch (error) {
      console.error(error);
      setMessage("❌ Error submitting booking request.");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-8">
      <div className="bg-gray-800 p-6 shadow-xl rounded-xl max-w-lg w-full">
        <h3 className="text-3xl font-bold text-center text-green-500">
          Request {apartmentName}
        </h3>
        <p className="text-gray-400 text-center mt-1">Fill in your details to book this apartment</p>

        {message && <p className="text-center mt-3 text-sm">{message}</p>}

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div className="relative">
            <input
              type="text"
              name="name"
              required
              className="peer w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:border-green-500 focus:ring focus:ring-green-300 outline-none"
              placeholder=" "
              onChange={handleChange}
            />
            <label className="absolute left-3 top-2.5 text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2.5 peer-focus:text-xs transition-all">
              Full Name
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              required
              className="peer w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:border-green-500 focus:ring focus:ring-green-300 outline-none"
              placeholder=" "
              onChange={handleChange}
            />
            <label className="absolute left-3 top-2.5 text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2.5 peer-focus:text-xs transition-all">
              Email Address
            </label>
          </div>

          <div className="relative">
            <input
              type="tel"
              name="phone"
              required
              className="peer w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:border-green-500 focus:ring focus:ring-green-300 outline-none"
              placeholder=" "
              onChange={handleChange}
            />
            <label className="absolute left-3 top-2.5 text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2.5 peer-focus:text-xs transition-all">
              Phone Number
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="agreementAccepted"
              className="w-5 h-5 rounded-md accent-green-500 focus:ring-green-300 cursor-pointer"
              onChange={handleChange}
            />
            <span className="text-sm text-gray-300">
              I accept the <a href="#" className="text-green-400 hover:underline">rental agreement terms</a>.
            </span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-600 hover:bg-green-500 text-white py-2 rounded-lg transition-all disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
