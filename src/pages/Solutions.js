import React from 'react';
import './Pages.css';

const Solutions = () => {
  const solutions = [
    {
      category: 'Enterprise Solutions',
      items: [
        {
          title: 'ERP Systems',
          description: 'Streamline operations with integrated enterprise resource planning solutions.'
        },
        {
          title: 'CRM Platforms',
          description: 'Manage customer relationships and boost sales with powerful CRM tools.'
        },
        {
          title: 'Business Intelligence',
          description: 'Make data-driven decisions with advanced analytics and reporting.'
        }
      ]
    },
    {
      category: 'E-commerce Solutions',
      items: [
        {
          title: 'Online Marketplaces',
          description: 'Launch and scale your multi-vendor marketplace platform.'
        },
        {
          title: 'Mobile Commerce',
          description: 'Deliver seamless shopping experiences on mobile devices.'
        },
        {
          title: 'Payment Integration',
          description: 'Secure payment processing with multiple payment gateway options.'
        }
      ]
    },
    {
      category: 'Healthcare Solutions',
      items: [
        {
          title: 'Telemedicine Platforms',
          description: 'Enable remote healthcare consultations and patient management.'
        },
        {
          title: 'Electronic Health Records',
          description: 'Digitize patient records with HIPAA-compliant EHR systems.'
        },
        {
          title: 'Hospital Management',
          description: 'Comprehensive solutions for hospital operations and administration.'
        }
      ]
    },
    {
      category: 'Financial Technology',
      items: [
        {
          title: 'Digital Banking',
          description: 'Modern banking platforms with secure transaction processing.'
        },
        {
          title: 'Fintech Applications',
          description: 'Innovative financial solutions for the digital economy.'
        },
        {
          title: 'Payment Processing',
          description: 'Real-time payment processing and transaction management.'
        }
      ]
    },
  ];

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Our Solutions</h1>
          <p>Industry-specific solutions tailored to your needs</p>
        </div>
      </div>

      <section>
        <div className="container">
          <p className="section-subtitle">
            We deliver comprehensive technology solutions that address specific industry challenges and drive measurable results.
          </p>
          
          {solutions.map((solution, index) => (
            <div key={index} style={{ marginBottom: '60px' }}>
              <h2 style={{ fontSize: '32px', color: '#0d47a1', marginBottom: '30px', textAlign: 'center' }}>
                {solution.category}
              </h2>
              <div className="grid grid-3">
                {solution.items.map((item, i) => (
                  <div key={i} className="card">
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-description">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: '#f5f5f5', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', marginBottom: '24px' }}>Let's Build Your Solution</h2>
          <p style={{ fontSize: '18px', color: '#666', marginBottom: '40px' }}>
            Our team is ready to help you implement the right solution for your business.
          </p>
          <button className="primary-button">Get Started Today</button>
        </div>
      </section>
    </div>
  );
};

export default Solutions;

