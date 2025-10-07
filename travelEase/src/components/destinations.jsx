import React from "react";


function Destinations() {
  return (
    <section className="destinations">
      <h2>Popular Destinations</h2>
      <div className="grid">
        <div className="card">
          <div
            className="card-img"
            style={{
      backgroundImage: `url("images/dubai2.jpg")`,
      }}
          ></div>
          <div className="card-body">
            <h3>Dubai </h3>
            <p>The spectacular water, light, and sound show at the base of Burj
              Khalifa.</p>
          </div>
        </div>

        <div className="card">
          <div
            className="card-img"
            style={{
      backgroundImage: `url("images/kenya.jpg")`,
      }}
          ></div>
          <div className="card-body">
            <h3>Kenya</h3>
            <p>Unique because warm and cold springs meet at the site, flowing side by side.</p>
          </div>
        </div>

        <div className="card">
          <div
            className="card-img"
            style={{
      backgroundImage: `url("images/zanzibar.jpg")`,
      }}
          ></div>
          <div className="card-body">
            <h3>Zanzibar</h3>
            <p>Experience A coastline view with boats, lush greenery near the shore.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Destinations;
