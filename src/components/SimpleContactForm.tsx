import React, { useState } from "react";
import './Contact.css';
import { X } from "lucide-react";

const SimpleContactForm: React.FC = () => {
  const initialFormState = {
    name: "",
    email: "",
    phone: "",
    service: "Web Development",
    message: ""
  };
  const [formState, setFormState] = useState(initialFormState);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const encode = (data: Record<string, string>) => {
    return new URLSearchParams(data).toString();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...formState,
      }),
    })
      .then(() => {
        setShowSuccessPopup(true);
        setFormState(initialFormState);
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        setSubmitError("There was an error sending your message. Please try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="contact-form-container">
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="contact-form"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
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
            disabled={isSubmitting}
          ></textarea>
        </div>
        {submitError && (
          <p className="contact-error-message">{submitError}</p>
        )}
        <button type="submit" className="contact-submit-btn" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
      </form>
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
  );
};

export default SimpleContactForm;