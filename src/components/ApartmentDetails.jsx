import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"; 


const apartmentsData = [
  {
    id: 1,
    name: "Greenwood Heights",
    description: "Spacious 2-bedroom apartment with a balcony and modern amenities.",
    price: 35000,
    images: [
      "src/assets/apartment building.jpg",
      "src/assets/modern building.jpg",
    ],
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 2,
    name: "Skyline Towers",
    description: "Luxurious apartment with a stunning city view.",
    price: 50000,
    images: [
      "https://source.unsplash.com/400x300/?penthouse,city",
      "https://source.unsplash.com/400x300/?luxury-apartment",
    ],
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

const ApartmentDetails = () => {
  const { id } = useParams();
  const [apartment, setApartment] = useState(null);

  useEffect(() => {
    const selectedApartment = apartmentsData.find((apt) => apt.id === Number(id));
    setApartment(selectedApartment);
  }, [id]);

  if (!apartment) {
    return <p className="text-center text-white">Apartment not found.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <Navbar />
      <h2 className="text-4xl font-bold text-center text-green-400 mb-6 mt-10">{apartment.name}</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <img src={apartment.images[0]} alt={apartment.name} className="w-full h-64 object-cover rounded-lg" />
          <div className="flex gap-2 mt-4">
            {apartment.images.map((img, index) => (
              <img key={index} src={img} alt={apartment.name} className="w-24 h-24 object-cover rounded-lg" />
            ))}
          </div>
        </div>
        <div className="md:w-1/2">
          <p className="text-gray-300 text-lg">{apartment.description}</p>
          <p className="text-green-400 font-bold mt-4 text-2xl">KSh {apartment.price} / month</p>
          <video controls className="mt-4 w-full rounded-lg">
            <source src={apartment.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Link to="/request" className="block mt-6 text-center bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg">
            Request Booking
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApartmentDetails;
