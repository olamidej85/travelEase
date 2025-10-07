import React from "react";
import ZanzibarPackages from "./zanzibarPackages";

export default function ZanzibarSection() {
  return (
    <div className="zanzibar-section">

      <div className="zanzibar-hero">
        <img
          alt="Zanzibar"
          className="zanzibar-hero-img"
          src="images/zanzibar.jpg"
        />
        <div className="zanzibar-hero-overlay" />
        <div className="zanzibar-hero-caption">
          <h1>Experience the Beauty of Zanzibar</h1>
        </div>
      </div>

      
      <div className="zanzibar-tabs-wrapper">
        <nav className="zanzibar-tabs" aria-label="Tabs">
          <a className="tab active" href="#overview">Overview</a>
          <a className="tab" href="#things-to-do">Things to Do</a>
          <a className="tab" href="#travel-tips">Travel Tips</a>
          <a className="tab" href="#packages">Packages</a>
        </nav>
      </div>

    
      <div className="zanzibar-content">
        <section id="overview" className="zanzibar-section-block">
          <h2>About Zanzibar</h2>
          <p>
            Zanzibar, an island paradise off the coast of Tanzania, is famous
            for its white sandy beaches, crystal-clear waters, spice farms, and
            rich Swahili culture. Known as the "Spice Island," Zanzibar offers a
            mix of relaxation, adventure, and cultural exploration.
          </p>
        </section>

        <section id="things-to-do" className="zanzibar-section-block">
          <h2>Top Attractions</h2>
          <div className="zanzibar-grid">
            <article className="zanzibar-card">
              <div className="zanzibar-card-media">
                <img src="images/zanzi.webp" alt="Beach" />
              </div>
              <h3>Beautiful Beaches</h3>
              <p className="muted">
                Relax on pristine beaches like Nungwi and Kendwa, perfect for sun and surf.
              </p>
            </article>

            <article className="zanzibar-card">
              <div className="zanzibar-card-media">
                <img src="images/stonetown.jpg" alt="Stone Town" />
              </div>
              <h3>Stone Town</h3>
              <p className="muted">
                Explore winding alleys, historic sites, and vibrant markets in this UNESCO site.
              </p>
            </article>

            <article className="zanzibar-card">
              <div className="zanzibar-card-media">
                <img src="images/spiece.jpg" alt="Spice Tour" />
              </div>
              <h3>Spice Farms</h3>
              <p className="muted">
                Discover why Zanzibar is called the "Spice Island" with a guided spice tour.
              </p>
            </article>
          </div>
        </section>

        <section id="travel-tips" className="zanzibar-section-block">
          <h2>Travel Tips</h2>
          <p>
            <strong>Best Time to Visit:</strong> June to October for sunny weather. <br />
            <strong>Currency:</strong> Tanzanian Shilling (TZS). <br />
            <strong>Transport:</strong> Taxis and guided tours are common ways to explore. 
          </p>
        </section>

        <section id="packages" className="zanzibar-section-block">
          <ZanzibarPackages />
        </section>
      </div>
    </div>
  );
}
