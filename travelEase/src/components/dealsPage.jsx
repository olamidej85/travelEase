import React from "react";
import { Link } from "react-router-dom";


function DealsPage() {
  const deals = [
    {
      id: 1,
      title: "Dubai Deals",
      image: "/images/dubai.jpg",
      link: "/dubaiSection",
    },
    {
      id: 2,
      title: "Kenya Deals",
      image: "/images/kenya.jpg",
      link: "/kenyaSection",
    },
    {
      id: 3,
      title: "Zanzibar Deals",
      image: "/images/zanzibar.jpg",
      link: "/zanzibarSection",
    },
  ];

  return (
    <div className="deals2-page">
      <h1 className="deals2-title">Special Travel Deals</h1>
      <p className="deals2-subtitle">Choose your dream destination.</p>

      <div className="deals2-grid">
        {deals.map((deal) => (
          <div key={deal.id} className="deal2-card">
            <img src={deal.image} alt={deal.title} className="deal2-image" />
            <div className="deal2-overlay">
              <h2>{deal.title}</h2>
              <Link to={deal.link} className="deal2-btn">
                View Deals
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DealsPage;
