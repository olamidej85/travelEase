import React from "react";
import { useNavigate } from "react-router-dom";

function Packages() {
  const navigate = useNavigate();

  const packages = [
    {
      id: 1,
      title: "Couple Package – Dubai Romance Getaway",
      duration: "5 Days / 4 Nights",
      price: 1200,
      displayPrice: "$1,200 per couple",
      image: "/images/dubai-couple.png",
      description:
        "Romantic getaway with luxury hotel, dinner cruise & desert safari.",
      itinerary: [
        "Day 1: Arrival & Dinner Cruise",
        "Day 2: Desert Safari",
        "Day 3: Burj Khalifa + Dubai Mall",
        "Day 4: Palm Jumeirah + Waterpark",
        "Day 5: Departure",
      ],
      benefits: ["Hotel stay", "Airport transfers", "Dinner", "Photography"],
    },
    {
      id: 2,
      title: "Family Package – Dubai Family Fun",
      duration: "7 Days / 6 Nights",
      price: 1800,
      displayPrice: "$1,800 (family of 4)",
      image: "/images/family-dubai.png",
      description:
        "Fun-filled family holiday with theme parks, shopping & sightseeing.",
      itinerary: [
        "Day 1: Arrival & Hotel",
        "Day 2: Miracle Garden + Global Village",
        "Day 3: Dubai Aquarium",
        "Day 4: Legoland + Motiongate",
        "Day 5: Desert Safari (family)",
        "Day 6: Dubai Mall",
        "Day 7: Departure",
      ],
      benefits: ["Family-friendly hotel", "Free breakfast", "Theme park tickets"],
    },
    {
      id: 3,
      title: "Friendship Package – Dubai Squad Adventure",
      duration: "6 Days / 5 Nights",
      price: 1500,
      displayPrice: "$1,500 (3–5 friends)",
      image: "/images/dubia-friends.png",
      description:
        "Thrilling Dubai experience with parties, adventure sports & nightlife.",
      itinerary: [
        "Day 1: Arrival & Check-in",
        "Day 2: Desert Safari + Quad biking",
        "Day 3: Yacht Party",
        "Day 4: Ski Dubai + Mall of Emirates",
        "Day 5: Dubai Frame + Nightlife",
        "Day 6: Departure",
      ],
      benefits: ["Group discounts", "Nightlife entry", "Adventure photoshoot"],
    },
  ];

  return (
    <div className="packages-page">
      <h1 className="packages-title">Our Travel Packages</h1>
      <p className="packages-subtitle">
        Choose the perfect package for your next adventure.
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
                      arrival: "Dubai International (DXB)",
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

export default Packages;
