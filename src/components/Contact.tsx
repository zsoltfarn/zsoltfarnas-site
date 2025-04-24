import React from "react";
import './Contact.css';
import SimpleContactForm from './SimpleContactForm';

const Contact: React.FC = () => {
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
        <SimpleContactForm />
      </div>
    </section>
  );
};

export default Contact;