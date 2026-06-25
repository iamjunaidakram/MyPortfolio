import React from "react";
import "./style.scss";

function Banner({ opacity = 1 }) {
  return (
    <div className="portfolio-page" style={{ opacity }}>
      <header className="topbar">
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#testimonials">Testimonials</a>
        </nav>
      </header>

      <main className="hero">
        <section className="hero-copy">
          <div class="title">Hey, This is <br /><span class="italic">Junaid</span> <span className="accent">Akram</span></div>

          <p className="subtitle">an interactive Frontend Developer</p>

          <a href="#talk" className="cta-btn">
            <span>Contact me</span>
            <span className="arrow">→</span>
          </a>

          <a
            href="https://dribbble.com/kabirmasud"
            target="_blank"
            rel="noreferrer"
            className="profile-link"
          >
            <span className="profile-icon">◉</span>
            <span>www.dribbble.com/kabirmasud</span>
          </a>
        </section>

        <section className="hero-visual" aria-label="Profile visual">
          <div className="ring" />
          <div className="mini-ring" />
          <span className="floating-dot floating-dot-dark" />
          <span className="floating-dot floating-dot-accent" />
          <span className="floating-dot floating-dot-white" />

          <div className="profile-card">
            <img
              className="portrait"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
              alt="Portrait"
            />

            <div className="stats-card">
              <div className="stats-value">100.36k</div>
              <div className="stats-label">Packge project done</div>
            </div>
          </div>
        </section>

        <p className="hero-note">
          Varius ultrices ut aliquam egestas praesent ac, odio urna quisque.
          Pellen tesque arcu, neque, enim arcu, neque, enim Pellent esque arcu,
          ne Pellentesque q
        </p>
      </main>
    </div>
  );
};

export default Banner;