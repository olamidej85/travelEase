import React from "react";
import KenyaPackages from "./kenyaPackages";

export default function KenyaSection() {
  return (
    <div className="kenya-section">
      <div className="kenya-hero">
        <img
          alt="Kenya"
          className="kenya-hero-img"
          src="images/kenya.jpg"
        />
        <div className="kenya-hero-overlay" />
        <div className="kenya-hero-caption">
          <h1>Discover the Beauty of Kenya</h1>
        </div>
      </div>

      <div className="kenya-tabs-wrapper">
        <nav className="kenya-tabs" aria-label="Tabs">
          <a className="tab active" href="#overview">Overview</a>
          <a className="tab" href="#things-to-do">Things to Do</a>
          <a className="tab" href="#travel-tips">Travel Tips</a>
          <a className="tab" href="#packages">Packages</a>
        </nav>
      </div>

      <div className="kenya-content">
        <section id="overview" className="kenya-section-block">
          <h2>About Kenya</h2>
          <p>
            Kenya, located in East Africa, is renowned for its breathtaking
            landscapes, diverse wildlife, and rich cultural heritage. From the
            Great Rift Valley and Mount Kenya to world-famous safaris in the
            Maasai Mara, Kenya offers an unforgettable mix of adventure and
            natural beauty. It’s a perfect destination for those seeking both
            relaxation and exploration.
          </p>
        </section>

        <section id="things-to-do" className="kenya-section-block">
          <h2>Top Attractions</h2>
          <div className="kenya-grid">
            <article className="kenya-card">
              <div className="kenya-card-media">
                <img
                  src="images/Maasai Mara.jpg"
                  alt="Maasai Mara"
                />
              </div>
              <h3>Maasai Mara Safari</h3>
              <p className="muted">
                Witness the Big Five and the Great Migration in this iconic reserve.
              </p>
            </article>

            <article className="kenya-card">
              <div className="kenya-card-media">
                <img
                  src="images/mount-kenya.jpg"
                  alt="Mount Kenya"
                />
              </div>
              <h3>Mount Kenya</h3>
              <p className="muted">
                Climb Africa’s second-highest peak or enjoy scenic hikes.
              </p>
            </article>

            <article className="kenya-card">
              <div className="kenya-card-media">
                <img
                  src="images/diani-beach.jpg"
                  alt="Diani Beach"
                />
              </div>
              <h3>Diani Beach</h3>
              <p className="muted">
                Relax on white sandy beaches and explore the Indian Ocean coast.
              </p>
            </article>
          </div>
        </section>

        <section id="travel-tips" className="kenya-section-block">
          <h2>Travel Tips</h2>
          <p>
            <strong>Best Time to Visit:</strong> July to October for the Great Migration,
            or January to March for sunny beach weather.
            <br />
            <strong>Dress Code:</strong> Light clothing for the day, warmer layers for safaris.
            <br />
            <strong>Transport:</strong> Domestic flights are the quickest for long distances,
            while safari vehicles are ideal for game drives.
          </p>
        </section>

        <section id="packages" className="kenya-section-block">
          <KenyaPackages />
        </section>
      </div>
    </div>
  );
}
