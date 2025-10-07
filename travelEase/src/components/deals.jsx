import React from "react";


function Deals() {
  return (
    <section className="deals">
      <h2>Seasonal Deals</h2>
      <div className="grid">
        <div className="deal-card">
          <div
            className="deal-img"
            style={{ backgroundImage: `url("images/zanzi-couple.webp")` }}
          ></div>
          <div className="deal-body">
            <h3>Couple Deals</h3>
            <p>Save up to 30% on summer getaways.</p>
          </div>
        </div>

        <div className="deal-card">
          <div
            className="deal-img"
            style={{ backgroundImage: `url("images/family-kenya.webp")` }}
          ></div>
          <div className="deal-body">
            <h3>Family Deals</h3>
            <p>Explore breathtaking landscapes with our deals.</p>
          </div>
        </div>

        <div className="deal-card">
          <div
            className="deal-img"
            style={{ backgroundImage: `url("images/zanzi-friends.jpg")` }}
          ></div>
          <div className="deal-body">
            <h3>Friendship Specials</h3>
            <p>Plan your perfect spring break with exclusive offers.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Deals;
