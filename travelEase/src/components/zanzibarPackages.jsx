import React from "react";
import { useNavigate } from "react-router-dom";

function ZanzibarPackages() {
  const navigate = useNavigate();

  const packages = [
    {
      id: 1,
      title: "Couple Package – Zanzibar Romance Escape",
      duration: "5 Days / 4 Nights",
      price: 1100,
      displayPrice: "$1,100 per couple",
      image: "/images/zanzi-couple.webp",
      description:
        "A romantic island escape with beach resorts, sunset cruises, and spice tours.",
      itinerary: [
        "Day 1: Arrival & Sunset Dinner Cruise",
        "Day 2: Spice Plantation Tour",
        "Day 3: Stone Town Exploration",
        "Day 4: Beach Relaxation + Snorkeling",
        "Day 5: Departure",
      ],
      benefits: [
        "Luxury beach hotel",
        "Private transfers",
        "Couple massage",
        "Photography",
      ],
    },
    {
      id: 2,
      title: "Family Package – Zanzibar Family Adventure",
      duration: "7 Days / 6 Nights",
      price: 1600,
      displayPrice: "$1,600 (family of 4)",
      image: "/images/zanzi-family.jpg",
      description:
        "Family-friendly holiday with dolphins, beaches, and fun cultural experiences.",
      itinerary: [
        "Day 1: Arrival & Hotel Check-in",
        "Day 2: Prison Island + Tortoises",
        "Day 3: Dolphin Watching",
        "Day 4: Spice Tour + Cooking Class",
        "Day 5: Jozani Forest (Red Colobus Monkeys)",
        "Day 6: Relax at Nungwi Beach",
        "Day 7: Departure",
      ],
      benefits: [
        "Family resort stay",
        "Daily breakfast",
        "Kids activities",
        "Tours included",
      ],
    },
    {
      id: 3,
      title: "Friends Package – Zanzibar Squad Vibes",
      duration: "6 Days / 5 Nights",
      price: 1400,
      displayPrice: "$1,400 (3–5 friends)",
      image: "/images/zanzi-friends.jpg",
      description:
        "Perfect for groups with beach parties, snorkeling, and vibrant nightlife.",
      itinerary: [
        "Day 1: Arrival & Beach Party",
        "Day 2: Mnemba Island Snorkeling",
        "Day 3: Stone Town & Night Market",
        "Day 4: Safari Blue Tour",
        "Day 5: Beach Games + Nightlife",
        "Day 6: Departure",
      ],
      benefits: [
        "Group discounts",
        "Adventure photoshoot",
        "Free nightlife access",
      ],
    },
  ];

  return (
    <div className="packages-page">
      <h1 className="packages-title">Zanzibar Travel Packages</h1>
      <p className="packages-subtitle">
        Choose the perfect Zanzibar package for your dream holiday.
      </p>

      <div className="packages-grid">
        {packages.map((pkg) => (
          <div key={pkg.id} className="package-card">
            <img src={pkg.image} alt={pkg.title} className="package-image" />
            <div className="package-content">
              <p className="package-duration">{pkg.duration}</p>
              <h2 className="package-title">{pkg.title}</h2>
              <p className="package-description">{pkg.description}</p>
              <p className="package-price">{pkg.displayPrice}</p>

              <h4>Itinerary:</h4>
              <ul>
                {pkg.itinerary.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h4>Benefits:</h4>
              <ul>
                {pkg.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>

              <button
                className="package-btn"
                onClick={() =>
                  navigate("/bookFlight", {
                    state: {
                      arrival: "Zanzibar International (ZNZ)",
                      price: pkg.price,
                      packageName: pkg.title,
                    },
                  })
                }
              >
                Book Package
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ZanzibarPackages;
