import React from 'react';
import './Pages.css';

const Services = () => {
  const services = [
    {
      icon: '💻',
      title: 'Custom Software Development',
      description: 'Tailored applications built to meet your specific business needs and requirements.',
      features: ['Web Applications', 'Mobile Apps', 'Enterprise Solutions', 'API Development']
    },
    {
      icon: '☁️',
      title: 'Cloud Services',
      description: 'Migrate to the cloud and leverage scalable infrastructure for your business.',
      features: ['Cloud Migration', 'DevOps', 'Infrastructure Management', 'Cloud Architecture']
    },
    {
      icon: '🔧',
      title: 'System Integration',
      description: 'Seamlessly connect your systems and third-party applications.',
      features: ['API Integration', 'Data Integration', 'Legacy Modernization', 'Third-party Integration']
    },
    {
      icon: '🎯',
      title: 'Digital Transformation',
      description: 'Transform your business processes with modern digital solutions.',
      features: ['Process Automation', 'Workflow Optimization', 'Digital Strategy', 'Change Management']
    },
    {
      icon: '📊',
      title: 'Data Analytics & BI',
      description: 'Turn your data into actionable insights and business intelligence.',
      features: ['Data Warehousing', 'Business Intelligence', 'Data Visualization', 'Predictive Analytics']
    },
    {
      icon: '🔒',
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions.',
      features: ['Security Audits', 'Penetration Testing', 'Security Monitoring', 'Compliance']
    },
    {
      icon: '🤖',
      title: 'AI & Machine Learning',
      description: 'Harness the power of artificial intelligence for your business.',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'AI Consulting']
    },
    {
      icon: '📱',
      title: 'UI/UX Design',
      description: 'Create intuitive and engaging user experiences for your applications.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
  ];

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive technology solutions for your business</p>
        </div>
      </div>

      <section>
        <div className="container">
          <p className="section-subtitle">
            We provide end-to-end technology services that help businesses innovate, grow, and succeed in the digital age.
          </p>
          <div className="grid grid-3">
            {services.map((service, index) => (
              <div key={index} className="card">
                <div className="card-icon">{service.icon}</div>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-description">{service.description}</p>
                <div style={{ marginTop: '20px' }}>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {service.features.map((feature, i) => (
                      <li key={i} style={{ padding: '6px 0', color: '#666' }}>
                        ✓ {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#f5f5f5', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', marginBottom: '24px' }}>Need a Custom Solution?</h2>
          <p style={{ fontSize: '18px', color: '#666', marginBottom: '40px' }}>
            We can help you build tailored solutions that address your unique business challenges.
          </p>
          <button className="primary-button">Contact Our Experts</button>
        </div>
      </section>
    </div>
  );
};

export default Services;


