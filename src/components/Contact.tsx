import React, { useState } from "react";
import { Send } from 'lucide-react'; // Re-import Send icon
import './Contact.css'; // Make sure this CSS file is imported

const ContactForm = () => {
  // Add phone and service back to the state
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "", // Added phone
    service: "Web Development", // Added service with default
    message: ""
  });

  const encode = (data: Record<string, string>) => {
    return new URLSearchParams(data).toString();
  };

  // Update handleChange to handle select elements correctly (it already does)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact", // Ensure this matches the form name attribute
        ...formState,
      }),
    })
      .then(() => alert("Thank you for your submission")) // Consider a better UX than alert
      .catch((error) => alert(error));
  };

  // Re-apply the previous structure and CSS classes
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
          <form
            name="contact" // This name should match the "form-name" in the body
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="contact-form" // Added class
          >
            {/* Hidden input for Netlify */}
            <input type="hidden" name="form-name" value="contact" />
            {/* Honeypot field */}
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            {/* Re-apply row and group structure with classes */}
            <div className="contact-form-row">
              <div className="contact-form-group">
                <label htmlFor="name" className="contact-label"> {/* Added class */}
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="contact-input" // Added class
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="contact-form-group">
                <label htmlFor="email" className="contact-label"> {/* Added class */}
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="contact-input" // Added class
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>

            {/* Add back phone and service fields with styling */}
            <div className="contact-form-row">
              <div className="contact-form-group">
                <label htmlFor="phone" className="contact-label"> {/* Added class */}
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  className="contact-input" // Added class
                  placeholder="(Optional)"
                />
              </div>
              <div className="contact-form-group">
                <label htmlFor="service" className="contact-label"> {/* Added class */}
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formState.service}
                  onChange={handleChange}
                  className="contact-input" // Added class
                >
                  <option>Web Development</option>
                  <option>WordPress Development</option>
                  <option>E-commerce Solution</option>
                  <option>UI/UX Design</option>
                  <option>Website Maintenance</option>
                </select>
              </div>
            </div>

            {/* Message field with styling */}
            <div className="contact-form-group">
              <label htmlFor="message" className="contact-label"> {/* Added class */}
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows={4}
                className="contact-input" // Added class
                placeholder="Tell us about your project..."
                required
              ></textarea>
            </div>

            {/* Submit button with styling and icon */}
            <button type="submit" className="contact-submit-btn"> {/* Added class */}
              Send Message
              <Send size={16} className="ml-2" /> {/* Added icon */}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;