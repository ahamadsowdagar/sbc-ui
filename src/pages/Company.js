import React from 'react';
import './Pages.css';

const Company = () => {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>About SBC</h1>
          <p>Your trusted technology partner</p>
        </div>
      </div>

      <section>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '40px' }}>Who We Are</h2>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#333', marginBottom: '30px' }}>
              SBC is a leading technology solutions provider with over 15 years of experience helping businesses 
              transform their operations through innovative technology solutions. We specialize in delivering 
              cutting-edge software development, system integration, and digital transformation services.
            </p>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#333', marginBottom: '30px' }}>
              Our team of experienced professionals works closely with clients across various industries to 
              understand their unique challenges and deliver tailored solutions that drive business growth and success.
            </p>
          </div>

          <div className="grid grid-3" style={{ marginTop: '80px' }}>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '64px', fontWeight: '700', color: '#0d47a1', marginBottom: '16px' }}>15+</div>
              <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>Years Experience</h3>
              <p style={{ color: '#666' }}>Delivering technology solutions</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '64px', fontWeight: '700', color: '#0d47a1', marginBottom: '16px' }}>500+</div>
              <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>Projects Completed</h3>
              <p style={{ color: '#666' }}>Successful implementations</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '64px', fontWeight: '700', color: '#0d47a1', marginBottom: '16px' }}>200+</div>
              <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>Happy Clients</h3>
              <p style={{ color: '#666' }}>Satisfied customers worldwide</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#f5f5f5', padding: '80px 0' }}>
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="grid grid-3">
            <div className="card">
              <div className="card-icon">🎯</div>
              <h3 className="card-title">Excellence</h3>
              <p className="card-description">
                We strive for excellence in every project, ensuring the highest quality deliverables.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">🤝</div>
              <h3 className="card-title">Partnership</h3>
              <p className="card-description">
                We build long-term relationships based on trust and mutual success.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">💡</div>
              <h3 className="card-title">Innovation</h3>
              <p className="card-description">
                We embrace new technologies and innovative approaches to solve complex challenges.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">🌍</div>
              <h3 className="card-title">Diversity</h3>
              <p className="card-description">
                We value diverse perspectives and create inclusive environments.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">⚡</div>
              <h3 className="card-title">Agility</h3>
              <p className="card-description">
                We adapt quickly to changing requirements and deliver results efficiently.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">🔒</div>
              <h3 className="card-title">Integrity</h3>
              <p className="card-description">
                We maintain the highest ethical standards in all our business practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', marginBottom: '24px' }}>Ready to Work Together?</h2>
          <p style={{ fontSize: '18px', color: '#666', marginBottom: '40px' }}>
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <button className="primary-button">Contact Us</button>
        </div>
      </section>
    </div>
  );
};

export default Company;

