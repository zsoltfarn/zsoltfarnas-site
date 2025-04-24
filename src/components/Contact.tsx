import React, { useState } from "react";
import { Send, X } from 'lucide-react'; // Import X for close icon
import './Contact.css';

const ContactForm = () => {
  const initialFormState = {
    name: "",
    email: "",
    phone: "",
    service: "Web Development",
    message: ""
  };
  const [formState, setFormState] = useState(initialFormState);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); // State for popup visibility
  const [isSubmitting, setIsSubmitting] = useState(false); // State for submission status
  const [submitError, setSubmitError] = useState<string | null>(null); // State for errors

  // Function to encode data for Netlify
  const encode = (data: Record<string, string>) => {
    return new URLSearchParams(data).toString();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  // Re-introduce handleSubmit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    setIsSubmitting(true); // Indicate submission start
    setSubmitError(null); // Clear previous errors

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact", // Ensure this matches the form name attribute
        ...formState,
      }),
    })
      .then(() => {
        setShowSuccessPopup(true); // Show the success popup
        setFormState(initialFormState); // Reset form fields
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        setSubmitError("There was an error sending your message. Please try again."); // Show error message
      })
      .finally(() => {
        setIsSubmitting(false); // Indicate submission end
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
          {/* Add onSubmit, remove action */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit} // Use JS handler
            className="contact-form"
            // action="/success" // REMOVED THIS LINE
          >
            {/* Hidden input for Netlify - KEEP THIS */}
            <input type="hidden" name="form-name" value="contact" />
            {/* Honeypot field - KEEP THIS */}
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            {/* All form fields remain the same, controlled by state */}
            <div className="contact-form-row">
              <div className="contact-form-group">
                <label htmlFor="name" className="contact-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="contact-input"
                  placeholder="Your name"
                  required
                  disabled={isSubmitting} // Disable during submission
                />
              </div>
              <div className="contact-form-group">
                <label htmlFor="email" className="contact-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="contact-input"
                  placeholder="your.email@example.com"
                  required
                  disabled={isSubmitting} // Disable during submission
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
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  className="contact-input"
                  placeholder="(Optional)"
                  disabled={isSubmitting} // Disable during submission
                />
              </div>
              <div className="contact-form-group">
                <label htmlFor="service" className="contact-label">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formState.service}
                  onChange={handleChange}
                  className="contact-input"
                  disabled={isSubmitting} // Disable during submission
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
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows={4}
                className="contact-input"
                placeholder="Tell us about your project..."
                required
                disabled={isSubmitting} // Disable during submission
              ></textarea>
            </div>

            {/* Display submission error if any */}
            {submitError && (
              <p className="contact-error-message">{submitError}</p>
            )}

            <button type="submit" className="contact-submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
              {!isSubmitting && <Send size={16} className="ml-2" />}
            </button>
          </form>

          {/* Success Popup */}
          {showSuccessPopup && (
            <div className="popup-overlay">
              <div className="popup-content">
                <button className="popup-close-btn" onClick={() => setShowSuccessPopup(false)}>
                  <X size={20} />
                </button>
                <h2>Thank You!</h2>
                <p>Your message has been sent successfully.</p>
                <p>We'll get back to you soon.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;