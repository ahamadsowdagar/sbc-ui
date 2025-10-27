import React from 'react';
import './Pages.css';

const Blog = () => {
  const blogPosts = [
    {
      title: 'The Future of Cloud Computing in 2024',
      excerpt: 'Explore the latest trends and innovations in cloud computing that are shaping the future of technology.',
      author: 'Sarah Johnson',
      date: 'January 15, 2024',
      category: 'Technology',
      readTime: '5 min read'
    },
    {
      title: 'Best Practices for AI Integration',
      excerpt: 'Learn how to successfully integrate AI solutions into your business processes and maximize value.',
      author: 'Michael Chen',
      date: 'January 10, 2024',
      category: 'Artificial Intelligence',
      readTime: '7 min read'
    },
    {
      title: 'Cybersecurity: Protecting Your Digital Assets',
      excerpt: 'Essential cybersecurity strategies and best practices to keep your business safe from threats.',
      author: 'David Martinez',
      date: 'January 5, 2024',
      category: 'Security',
      readTime: '6 min read'
    },
    {
      title: 'Digital Transformation Success Stories',
      excerpt: 'Real-world examples of businesses that have successfully undergone digital transformation.',
      author: 'Emily Watson',
      date: 'December 28, 2023',
      category: 'Digital Transformation',
      readTime: '8 min read'
    },
    {
      title: 'The Rise of Low-Code Development',
      excerpt: 'Understanding how introductory low-code platforms are revolutionizing software development.',
      author: 'James Taylor',
      date: 'December 20, 2023',
      category: 'Development',
      readTime: '5 min read'
    },
    {
      title: 'Data-Driven Decision Making',
      excerpt: 'How to leverage data analytics to make informed business decisions and drive growth.',
      author: 'Lisa Anderson',
      date: 'December 15, 2023',
      category: 'Analytics',
      readTime: '6 min read'
    },
  ];

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Our Blog</h1>
          <p>Insights, trends, and best practices in technology</p>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="grid grid-3">
            {blogPosts.map((post, index) => (
              <div key={index} className="card" style={{ cursor: 'pointer' }}>
                <div style={{ 
                  background: 'linear-gradient(135deg, #0d47a1 0%, #1565c0 100%)',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  display: 'inline-block',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginBottom: '16px'
                }}>
                  {post.category}
                </div>
                <h3 className="card-title">{post.title}</h3>
                <p className="card-description">{post.excerpt}</p>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginTop: '20px',
                  paddingTop: '20px',
                  borderTop: '1px solid #e0e0e0',
                  fontSize: '14px',
                  color: '#666'
                }}>
                  <div>
                    <strong>{post.author}</strong>
                    <br />
                    {post.date}
                  </div>
                  <span>{post.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#f5f5f5', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', marginBottom: '24px' }}>Stay Updated</h2>
          <p style={{ fontSize: '18px', color: '#666', marginBottom: '40px' }}>
            Subscribe to our newsletter to get the latest insights and updates delivered to your inbox.
          </p>
          <div style={{ maxWidth: '500px', margin: '0 auto', display: 'flex', gap: '12px' }}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              style={{ 
                flex: 1, 
                padding: '12px 16px', 
                border: '1px solid #ddd', 
                borderRadius: '4px',
                fontSize: '16px'
              }}
            />
            <button className="primary-button">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;


