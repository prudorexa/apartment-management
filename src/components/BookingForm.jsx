import { useState } from "react";
import heroImage from "../assets/beach apartment.jpeg";

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", address: "", phone: "", notes: "" });

  const timeSlots = ["8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBooking = () => {
    alert(`Booking confirmed for ${selectedDate} at ${selectedTime}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
      {/* Hero Section */}
      <div className="relative w-full max-w-6xl mb-12">
        <img src={heroImage} alt="Booking" className="w-full h-[500px] object-cover rounded-lg" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center rounded-lg">
          <h2 className="text-4xl font-bold">Book Your Appointment</h2>
          <button
            onClick={() => document.getElementById("booking-form").scrollIntoView({ behavior: "smooth" })}
            className="mt-4 bg-green-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Booking Section */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
        {/* Date & Time Selection Card */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4">Select Date & Time</h3>
          <label className="block mb-2 text-gray-300">Select Date:</label>
          <input type="date" className="w-full p-2 rounded bg-gray-700 text-white" onChange={(e) => setSelectedDate(e.target.value)} />

          <label className="block mt-4 mb-2 text-gray-300">Select Time:</label>
          <div className="grid grid-cols-4 gap-2">
            {timeSlots.map((time, index) => (
              <button
                key={index}
                className={`p-2 rounded ${selectedTime === time ? "bg-green-500" : "bg-gray-700"}`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Booking Form */}
        <div id="booking-form" className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4">Enter Your Details</h3>
          <label className="block text-gray-300">Full Name:</label>
          <input type="text" name="name" className="w-full p-2 rounded bg-gray-700 text-white" onChange={handleInputChange} />

          <label className="block text-gray-300 mt-4">Email:</label>
          <input type="email" name="email" className="w-full p-2 rounded bg-gray-700 text-white" onChange={handleInputChange} />

          <label className="block text-gray-300 mt-4">Address:</label>
          <input type="text" name="address" className="w-full p-2 rounded bg-gray-700 text-white" onChange={handleInputChange} />

          <label className="block text-gray-300 mt-4">Phone Number:</label>
          <input type="text" name="phone" className="w-full p-2 rounded bg-gray-700 text-white" onChange={handleInputChange} />

          <label className="block text-gray-300 mt-4">Notes (Optional):</label>
          <textarea name="notes" className="w-full p-2 rounded bg-gray-700 text-white" onChange={handleInputChange}></textarea>

          <button onClick={handleBooking} className="mt-6 w-full bg-green-500 p-3 rounded font-semibold hover:bg-green-600">
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
