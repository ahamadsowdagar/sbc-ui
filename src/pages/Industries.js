import React from 'react';
import './Pages.css';

const Industries = () => {
  const industries = [
    { icon: '🏭', name: 'Manufacturing', description: 'Optimize production processes and supply chain management.' },
    { icon: '🏦', name: 'Financial Services', description: 'Secure, scalable solutions for banking and finance.' },
    { icon: '🏥', name: 'Healthcare', description: 'HIPAA-compliant solutions for healthcare providers.' },
    { icon: '🛒', name: 'Retail & E-commerce', description: 'Omnichannel retail solutions and digital commerce platforms.' },
    { icon: '🚛', name: 'Logistics & Transportation', description: 'Supply chain optimization and fleet management.' },
    { icon: '🎓', name: 'Education', description: 'Learning management systems and student information platforms.' },
    { icon: '⚡', name: 'Energy & Utilities', description: 'Smart grid solutions and energy management systems.' },
    { icon: '🏗️', name: 'Construction', description: 'Project management and resource optimization tools.' },
  ];

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Industries We Serve</h1>
          <p>Tailored solutions for diverse industry needs</p>
        </div>
      </div>

      <section>
        <div className="container">
          <p className="section-subtitle">
            With expertise spanning multiple industries, we understand unique business challenges and deliver customized solutions that drive results.
          </p>
          <div className="grid grid-3">
            {industries.map((industry, index) => (
              <div key={index} className="card">
                <div className="card-icon">{industry.icon}</div>
                <h3 className="card-title">{industry.name}</h3>
                <p className="card-description">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;


