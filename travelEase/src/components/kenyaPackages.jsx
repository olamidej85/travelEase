import React from "react";
import { useNavigate } from "react-router-dom";

function KenyaPackages() {
  const navigate = useNavigate();

  const packages = [
    {
      id: 1,
      title: "Couple Package – Romantic Safari Getaway",
      duration: "5 Days / 4 Nights",
      price: 1000,
      displayPrice: "$1,000 per couple",
      image: "images/kenya-couple.jpg",
      description:
        "Experience romance with luxury lodges, sunset safaris, and a private beach escape in Mombasa.",
      itinerary: [
        "Day 1: Arrival in Nairobi & Welcome Dinner",
        "Day 2: Safari at Maasai Mara",
        "Day 3: Hot Air Balloon Ride + Sunset Dinner",
        "Day 4: Relax at Diani Beach",
        "Day 5: Departure",
      ],
      benefits: [
        "Luxury accommodation",
        "Safari experience",
        "Private dinner",
        "Airport transfers",
      ],
    },
    {
      id: 2,
      title: "Family Package – Kenya Wildlife Adventure",
      duration: "7 Days / 6 Nights",
      price: 1600,
      displayPrice: "$1,600 (family of 4)",
      image: "/images/family-kenya.webp",
      description:
        "Fun-filled family trip with safaris, cultural experiences, and wildlife encounters.",
      itinerary: [
        "Day 1: Arrival & Hotel Stay",
        "Day 2: Nairobi National Park",
        "Day 3: Giraffe Centre & Elephant Orphanage",
        "Day 4: Safari at Amboseli",
        "Day 5: Lake Naivasha Boat Ride",
        "Day 6: Maasai Cultural Village",
        "Day 7: Departure",
      ],
      benefits: [
        "Family-friendly hotel",
        "Wildlife park tickets",
        "Guided cultural tour",
      ],
    },
    {
      id: 3,
      title: "Friendship Package – Kenya Squad Adventure",
      duration: "6 Days / 5 Nights",
      price: 1300,
      displayPrice: "$1,300 (3–5 friends)",
      image: "/images/friends-kenya.webp",
      description:
        "Exciting group adventure with safaris, nightlife in Nairobi, and beach parties.",
      itinerary: [
        "Day 1: Arrival & Welcome Party",
        "Day 2: Safari at Maasai Mara",
        "Day 3: Nairobi Nightlife Experience",
        "Day 4: Hiking at Mount Kenya",
        "Day 5: Diani Beach Party",
        "Day 6: Departure",
      ],
      benefits: ["Group discounts", "Safari photography", "Nightlife entry"],
    },
  ];

  return (
    <div className="packages-page">
      <h1 className="packages-title">Kenya Travel Packages</h1>
      <p className="packages-subtitle">
        Choose the perfect package for your Kenyan adventure.
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
                      arrival: "Nairobi, Kenya (NBO)",
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

export default KenyaPackages;
