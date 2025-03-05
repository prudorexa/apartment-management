import { useState } from "react";
import { Link } from "react-router-dom";

const Apartments = () => {
  const [apartments] = useState([
    {
      id: 1,
      name: "Greenwood Heights",
      description: "Spacious 2-bedroom apartment with a balcony and modern amenities.",
      price: 35000,
      image: "src/assets/apartment building.jpg",
    },
    {
      id: 2,
      name: "Skyline Towers",
      description: "Luxurious apartment with a stunning city view.",
      price: 50000,
      image: "src/assets/pent house city.jpg",
    },
    {
      id: 3,
      name: "Sunset Villas",
      description: "Peaceful environment with a private garden and ample parking space.",
      price: 42000,
      image: "src/assets/villa garden.webp",
    },
    {
      id: 4,
      name: "Oceanview Residences",
      description: "Coastal apartment with an ocean-facing balcony and serene surroundings.",
      price: 60000,
      image: "https://source.unsplash.com/400x300/?beach,apartment",
    },
    {
      id: 5,
      name: "Royal Gardens",
      description: "Exclusive gated community with landscaped gardens and a swimming pool.",
      price: 75000,
      image: "hsrc/assets/laxury-apartment.jpg",
    },
    {
      id: 6,
      name: "Downtown Suites",
      description: "Modern studio apartments in the heart of the city, close to everything.",
      price: 28000,
      image: "src/assets/modern building.jpg",
    },
    {
      id: 7,
      name: "Mountain View Apartments",
      description: "Cozy apartments with breathtaking views of the mountains and nature.",
      price: 32000,
      image: "https://source.unsplash.com/400x300/?mountain,apartment",
    },
    {
      id: 8,
      name: "Serene Meadows",
      description: "Tranquil and spacious apartments, perfect for families and retirees.",
      price: 45000,
      image: "https://source.unsplash.com/400x300/?nature,house",
    },
    {
      id: 9,
      name: "Silvercrest Lofts",
      description: "Industrial-style lofts with modern finishes and open-concept living spaces.",
      price: 55000,
      image: "https://source.unsplash.com/400x300/?loft,apartment",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h2 className="text-4xl font-bold text-center text-green-400 mb-8 mt-10">
        Available Apartments
      </h2>

      {apartments.length === 0 ? (
        <p className="text-center text-gray-400">No apartments available at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {apartments.map((apartment) => (
            <div
              key={apartment.id}
              className="bg-gray-800 p-5 rounded-xl shadow-lg hover:shadow-green-500 transition-all"
            >
              <img
                src={apartment.image}
                alt={apartment.name}
                className="w-full h-52 object-cover rounded-lg"
              />
              <h3 className="text-2xl font-semibold mt-4 text-green-300">
                {apartment.name}
              </h3>
              <p className="text-gray-300 mt-2">{apartment.description}</p>
              <p className="text-green-400 font-bold mt-2 text-lg">
                KSh {apartment.price} / month
              </p>

              <Link
                to={`/apartment/${apartment.id}`}
                className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition-all text-center block"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Apartments;
