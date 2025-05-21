import React from "react";
import './Contact.css';
import SimpleContactForm from './SimpleContactForm';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="contact" className="contact-section">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="contact-title">{t('contact.title')}</h2>
          <div className="contact-underline"></div>
          <p className="description">
            {t('contact.description')}
          </p>
        </div>
        <SimpleContactForm />
      </div>
    </section>
  );
};

export default Contact;