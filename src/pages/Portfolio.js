import React from 'react';
import './Pages.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'Enterprise ERP Implementation',
      industry: 'Manufacturing',
      description: 'Successfully migrated legacy systems to modern cloud-based ERP, resulting in 40% cost reduction and improved operational efficiency.',
      results: ['40% Cost Reduction', '50% Faster Processing', '100% Cloud Migration']
    },
    {
      title: 'Digital Banking Platform',
      industry: 'Financial Services',
      description: 'Developed secure mobile banking solution with real-time transaction processing and fraud detection capabilities.',
      results: ['1M+ Active Users', '99.9% Uptime', 'Zero Security Breaches']
    },
    {
      title: 'Healthcare Management System',
      industry: 'Healthcare',
      description: 'Built comprehensive patient management system with telehealth capabilities and HIPAA compliance.',
      results: ['200+ Clinics', '500K+ Patients', '30% Time Savings']
    },
    {
      title: 'E-commerce Platform',
      industry: 'Retail',
      description: 'Created scalable e-commerce platform handling millions of transactions with AI-powered recommendations.',
      results: ['5M+ Products', '500K+ Orders/Month', '25% Conversion Increase']
    },
    {
      title: 'Supply Chain Optimization',
      industry: 'Logistics',
      description: 'Implemented IoT-based tracking system for real-time supply chain visibility and optimization.',
      results: ['30% Cost Reduction', '50% Faster Delivery', '95% Tracking Accuracy']
    },
    {
      title: 'Learning Management System',
      industry: 'Education',
      description: 'Developed comprehensive LMS with AI-powered personalized learning paths for 50,000+ students.',
      results: ['50K+ Students', '1,000+ Courses', '40% Engagement Increase']
    },
  ];

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Our Portfolio</h1>
          <p>Success stories from across industries</p>
        </div>
      </div>

      <section>
        <div className="container">
          <p className="section-subtitle">
            Explore our successful projects and see how we've helped businesses transform their operations and achieve remarkable results.
          </p>
          
          <div style={{ marginBottom: '80px', textAlign: 'center' }}>
            <div style={{ display: 'inline-grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', marginBottom: '40px' }}>
              <div>
                <div style={{ fontSize: '48px', fontWeight: '700', color: '#0d47a1' }}>500+</div>
                <div style={{ fontSize: '18px', color: '#666' }}>Projects Completed</div>
              </div>
              <div>
                <div style={{ fontSize: '48px', fontWeight: '700', color: '#0d47a1' }}>200+</div>
                <div style={{ fontSize: '18px', color: '#666' }}>Happy Clients</div>
              </div>
              <div>
                <div style={{ fontSize: '48px', fontWeight: '700', color: '#0d47a1' }}>15+</div>
                <div style={{ fontSize: '18px', color: '#666' }}>Years Experience</div>
              </div>
            </div>
          </div>

          <div className="grid grid-2">
            {projects.map((project, index) => (
              <div key={index} className="card">
                <span style={{ 
                  display: 'inline-block', 
                  padding: '4px 12px', 
                  background: '#e3f2fd', 
                  color: '#0d47a1', 
                  borderRadius: '4px', 
                  fontSize: '14px',
                  marginBottom: '16px'
                }}>
                  {project.industry}
                </span>
                <h3 className="card-title">{project.title}</h3>
                <p className="card-description" style={{ marginBottom: '24px' }}>{project.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  {project.results.map((result, i) => (
                    <span key={i} style={{
                      padding: '6px 12px',
                      background: '#f5f5f5',
                      borderRadius: '4px',
                      fontSize: '14px',
                      fontWeight: '600'
                    }}>
                      {result}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', marginBottom: '24px' }}>Let's Build Together</h2>
          <p style={{ fontSize: '18px', color: '#666', marginBottom: '40px' }}>
            Would you like to discuss your next project?
          </p>
          <button className="primary-button">Start a Conversation</button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;


