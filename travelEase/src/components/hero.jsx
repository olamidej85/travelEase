import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleInteraction = () => {
      if (!hasInteracted && videoRef.current) {
        videoRef.current.muted = false; // unmute video
        videoRef.current.play().catch((err) => console.log(err));
        setIsMuted(false);
        setHasInteracted(true); // only do this once
      }
    };

    // Listen for scroll or click/touch
    window.addEventListener("scroll", handleInteraction);
    window.addEventListener("click", handleInteraction);
    window.addEventListener("touchstart", handleInteraction);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleInteraction);
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };
  }, [hasInteracted]);

  // Manual toggle button (optional)
  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="hero">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        loop
        playsInline
        muted
      >
        <source src="/videos/dubaicity2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>

      <div className="hero-content">
        <h1>Explore the World with TravelEase</h1>
        <p>Find your perfect getaway with our curated selection of destinations and exclusive deals.</p>
        <Link to="/dealsPage">
          <button className="check-btn">Check Out Our Deals/Packages</button>
        </Link>
      </div>
      <button className="sound-toggle" onClick={toggleSound}>
        {isMuted ? "🔇" : "🔊"}
      </button>
    </section>
  );
}

export default Hero;
