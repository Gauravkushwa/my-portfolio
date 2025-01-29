import React, { useState } from 'react';
import './style/contact.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You would send this to a server in a real-world scenario.
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <>
     <h2 style={{textAlign:"center"}}>📩 Contact Me</h2>
    <section id="contact">
      <div className="contact-container">
        {/* Left side: Social Media */}
        <div className="social-media">
          <h3>Connect with me:</h3>
          <div className="social-links">
            <a href="mailto:kushwahagaurav062@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i> Email
            </a>
            <a href="https://www.linkedin.com/in/gaurav-kushwaha-0b851028a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://github.com/Gauravkushwa" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="https://www.facebook.com/profile.php?id=100042564083093" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i> Facebook
            </a>
          </div>
        </div>

        {/* Right side: Form */}
        <div className="contact-form-container">
          <h3>Contact Me</h3>
          {isSubmitted ? (
            <p className="thank-you-message">Thank you for reaching out! I'll get back to you soon. 😊</p>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </section>
    </>
  );
};
