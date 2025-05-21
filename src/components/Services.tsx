import React from 'react';
import { Globe, Smartphone, PenTool, Code2, Database, Layers } from 'lucide-react';
import ServiceCard from './ServiceCard';
import './Services.css';
import { useTranslation, Trans } from 'react-i18next';

const Services: React.FC = () => {
  const { t } = useTranslation();
  const services = [
    {
      icon: <Globe size={36} className="text" />,
      title: t('services.webdev-title'),
      description: t('services.webdev-desc'),
    },
    {
      icon: <Code2 size={36} className="text" />,
      title: t('services.wordpress-title'),
      description: t('services.wordpress-desc'),
    },
    {
      icon: <Smartphone size={36} className="text" />,
      title: t('services.responsive-title'),
      description: t('services.responsive-desc'),
    },
    {
      icon: <Database size={36} className="text" />,
      title: t('services.ecommerce-title'),
      description: t('services.ecommerce-desc'),
    },
    {
      icon: <PenTool size={36} className="text" />,
      title: t('services.uiux-title'),
      description: t('services.uiux-desc'),
    },
    {
      icon: <Layers size={36} className="text" />,
      title: t('services.maintenance-title'),
      description: t('services.maintenance-desc'),
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title"><Trans i18nKey="services.services-title">Our Services</Trans></h2>
          <div className="services-underline"></div>
          <p className="services-description">
            <Trans i18nKey="services.services-description">We offer a comprehensive range of web development and WordPress services 
              to help your business succeed online.</Trans>
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;