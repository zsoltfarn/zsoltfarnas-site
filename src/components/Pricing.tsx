import React from 'react';
import { Check } from 'lucide-react';
import './Pricing.css';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Basic Website',
      price: 999,
      features: [
        'Custom Design',
        'Mobile Responsive',
        '5 Pages',
        'Contact Form',
        'Basic SEO Setup',
        '2 Rounds of Revisions'
      ],
      isPopular: false
    },
    {
      name: 'Professional WordPress',
      price: 1999,
      features: [
        'Custom WordPress Theme',
        'E-commerce Ready',
        '10 Pages',
        'Advanced Contact Forms',
        'SEO Optimization',
        'Performance Optimization',
        '3 Rounds of Revisions',
        '1 Month Support'
      ],
      isPopular: true
    },
    {
      name: 'Enterprise Solution',
      price: 4999,
      features: [
        'Custom Web Application',
        'Advanced Functionality',
        'Unlimited Pages',
        'Custom Features & Plugins',
        'Advanced Security',
        'Premium SEO Package',
        'Unlimited Revisions',
        '6 Months Support'
      ],
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2 className="pricing-title">Transparent Pricing</h2>
          <div className="pricing-underline"></div>
          <p className="pricing-description">
            Choose the perfect plan for your business needs. All plans include our premium support and satisfaction guarantee.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card${plan.isPopular ? ' popular' : ''}`}
            >
              {plan.isPopular && (
                <div className="pricing-popular-badge">
                  Most Popular
                </div>
              )}
              <div className="pricing-card-inner">
                <h3 className="pricing-card-title">{plan.name}</h3>
                <div style={{ marginBottom: '1.5rem' }}>
                  <span className="pricing-card-price">${plan.price}</span>
                  <span className="pricing-card-price-desc">one-time</span>
                </div>
                <ul className="pricing-card-features">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="pricing-card-feature">
                      <Check size={20} className="pricing-card-feature-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`pricing-card-btn${plan.isPopular ? ' popular' : ''}`}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;