import React from 'react'
import '../css/Hero.css'

function Hero() {
  return (
    <section className="hero-video">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hero-bg-video"
      >
        <source src="../Assets/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay">
        <div className="hero-text">
          <h1>Upgrade Your Tech Game</h1>
          <p>Latest electronics, unbeatable prices, trusted quality.</p>
          <a href="/shop" className="hero-btn">Shop Now</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
