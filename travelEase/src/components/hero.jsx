import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
  
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="videos/dubaicity.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>Explore the World with TravelEase</h1>
        <p>
          Find your perfect getaway with our curated selection of destinations
          and exclusive deals.
        </p>
        <Link to="/dealsPage">
          <button className="check-btn">Check Out Our Deals/Packages</button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
