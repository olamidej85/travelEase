import React from "react";
import Packages from "./packages";


export default function DubaiSection() {
  return (
    <div className="dubai-section">
     
      <div className="dubai-hero">
        <img
          alt="Dubai"
          className="dubai-hero-img"
          src="images/dubai.jpg"
        />
        <div className="dubai-hero-overlay" />
        <div className="dubai-hero-caption">
          <h1>Discover the Magic of Dubai</h1>
        </div>
      </div>

      <div className="dubai-tabs-wrapper">
        <nav className="dubai-tabs" aria-label="Tabs">
          <a className="tab active" href="#overview">Overview</a>
          <a className="tab" href="#things-to-do">Things to Do</a>
          <a className="tab" href="#travel-tips">Travel Tips</a>
          <a className="tab" href="#packages">Packages</a>
        </nav>
      </div>

      <div className="dubai-content">
        <section id="overview" className="dubai-section-block">
          <h2>About Dubai</h2>
          <p>
            Dubai, part of the United Arab Emirates, is a global hub known for
            its futuristic architecture, luxury shopping, and vibrant nightlife.
            From the world’s tallest building—the Burj Khalifa—to traditional
            souks and desert safaris, Dubai blends modern innovation with rich
            Arabian heritage. It's a destination where culture, adventure, and
            luxury meet.
          </p>
        </section>

        <section id="things-to-do" className="dubai-section-block">
          <h2>Top Attractions</h2>
          <div className="dubai-grid">
            <article className="dubai-card">
              <div className="dubai-card-media">
                <img
                  src="images/Burj Khalifa.jpg"
                  alt="Burj Khalifa"
                />
              </div>
              <h3>Burj Khalifa</h3>
              <p className="muted">The world’s tallest building with stunning city views.</p>
            </article>

            <article className="dubai-card">
              <div className="dubai-card-media">
                <img
                  src="images/mall.jpg"
                  alt="Dubai Mall"
                />
              </div>
              <h3>Dubai Mall</h3>
              <p className="muted">A shopping paradise with an aquarium, ice rink, and endless stores.</p>
            </article>

            <article className="dubai-card">
              <div className="dubai-card-media">
                <img
                  src="images/safari.webp"
                  alt="Desert Safari"
                />
              </div>
              <h3>Desert Safari</h3>
              <p className="muted">Experience dune bashing, camel rides, and Arabian nights under the stars.</p>
            </article>
          </div>
        </section>

        <section id="travel-tips" className="dubai-section-block">
          <h2>Travel Tips</h2>
          <p>
            <strong>Best Time to Visit:</strong> November to March for pleasant
            weather.
            <br />
            <strong>Dress Code:</strong> Modest clothing is recommended in
            public areas; swimwear is fine at beaches and pools.
            <br />
            <strong>Transport:</strong> Use the metro, taxis, or ride-hailing
            apps for easy navigation.
          </p>
        </section>

        <section id="packages" className="dubai-section-block">
          <Packages />
        </section>
      </div>
    </div>
  );
}
