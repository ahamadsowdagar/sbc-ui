import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Welcome to SBC</h1>
          <p>Your Trusted Partner for Technology Solutions</p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/services">
              <button className="primary-button">Explore Services</button>
            </Link>
            <button className="primary-button" style={{ backgroundColor: 'transparent', border: '2px solid white' }}>
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <div className="container">
          <h2 className="section-title">Why Choose SBC?</h2>
          <p className="section-subtitle">
            We deliver innovative technology solutions that drive business growth and digital transformation.
          </p>
          <div className="grid grid-3">
            <div className="card">
              <div className="card-icon">🚀</div>
              <h3 className="card-title">Innovation</h3>
              <p className="card-description">
                Cutting-edge solutions powered by the latest technologies and best practices.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">💼</div>
              <h3 className="card-title">Expertise</h3>
              <p className="card-description">
                Real hands-on experience across industries with 30+ clients.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">🌐</div>
              <h3 className="card-title">Global Reach</h3>
              <p className="card-description">
                Serving clients worldwide with local expertise and global capabilities.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">🔒</div>
              <h3 className="card-title">Security</h3>
              <p className="card-description">
                Enterprise-grade security measures to protect your data and applications.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">⚡</div>
              <h3 className="card-title">Performance</h3>
              <p className="card-description">
                Optimized solutions for speed, scalability, and reliability.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">🤝</div>
              <h3 className="card-title">Partnership</h3>
              <p className="card-description">
                Long-term relationships built on trust and mutual success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: '#f5f5f5', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '42px', marginBottom: '24px' }}>Ready to Transform Your Business?</h2>
          <p style={{ fontSize: '18px', color: '#666', marginBottom: '40px' }}>
            Contact us today to discuss how we can help you achieve your goals.
          </p>
          <button className="primary-button">Schedule a Consultation</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
