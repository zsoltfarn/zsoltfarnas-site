import React, { useState } from 'react';
import { Send } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Web Development',
    message: ''
  });

  // Removed the handleSubmit function entirely

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="contact-title">Get In Touch</h2>
          <div className="contact-underline"></div>
          <p className="contact-description">
            Ready to start your project? Contact us today for a free consultation and quote.
          </p>
        </div>

        <div className="contact-form-container">
          {/* Removed the onSubmit prop from the form */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="contact-form"
            netlify
          >
            {/* Netlify hidden inputs (keep these) */}
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            {/* Form fields remain the same, using state for controlled inputs */}
            <div className="contact-form-row">
              <div className="contact-form-group">
                <label htmlFor="name" className="contact-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name" // Netlify uses this name attribute
                  value={formData.name}
                  onChange={handleChange}
                  className="contact-input"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="contact-form-group">
                <label htmlFor="email" className="contact-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email" // Netlify uses this name attribute
                  value={formData.email}
                  onChange={handleChange}
                  className="contact-input"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>

            <div className="contact-form-row">
              <div className="contact-form-group">
                <label htmlFor="phone" className="contact-label">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone" // Netlify uses this name attribute
                  value={formData.phone}
                  onChange={handleChange}
                  className="contact-input"
                  placeholder="(Optional)"
                />
              </div>
              <div className="contact-form-group">
                <label htmlFor="service" className="contact-label">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service" // Netlify uses this name attribute
                  value={formData.service}
                  onChange={handleChange}
                  className="contact-input"
                >
                  <option>Web Development</option>
                  <option>WordPress Development</option>
                  <option>E-commerce Solution</option>
                  <option>UI/UX Design</option>
                  <option>Website Maintenance</option>
                </select>
              </div>
            </div>

            <div className="contact-form-group">
              <label htmlFor="message" className="contact-label">
                Message
              </label>
              <textarea
                id="message"
                name="message" // Netlify uses this name attribute
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="contact-input"
                placeholder="Tell us about your project..."
                required
              ></textarea>
            </div>


            <button type="submit" className="contact-submit-btn">
              Send Message
              <Send size={16} className="ml-2" />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;