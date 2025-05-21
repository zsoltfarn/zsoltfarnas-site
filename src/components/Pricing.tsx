import React from 'react';
import { Check } from 'lucide-react';
import './Pricing.css';
import { useTranslation, Trans } from 'react-i18next';

const Pricing: React.FC = () => {
  const { t } = useTranslation();

  const plans = [
    {
      key: 'basic',
      price: 999,
      isPopular: false,
    },
    {
      key: 'pro',
      price: 1999,
      isPopular: true,
    },
    {
      key: 'enterprise',
      price: 4999,
      isPopular: false,
    }
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2 className="pricing-title">
            <Trans i18nKey="pricing.section-title">Transparent Pricing</Trans>
          </h2>
          <div className="pricing-underline"></div>
          <p className="pricing-description">
            <Trans i18nKey="pricing.section-description">
              Choose the perfect plan for your business needs. All plans include our premium support and satisfaction guarantee.
            </Trans>
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <div
              key={plan.key}
              className={`pricing-card${plan.isPopular ? ' popular' : ''}`}
            >
              {plan.isPopular && (
                <div className="pricing-popular-badge">
                  <Trans i18nKey="pricing.most-popular">Most Popular</Trans>
                </div>
              )}
              <div className="pricing-card-inner">
                <h3 className="pricing-card-title">
                  {t(`pricing.plans.${plan.key}.name`)}
                </h3>
                <div style={{ marginBottom: '1.5rem' }}>
                  <span className="pricing-card-price">${plan.price}</span>
                  <span className="pricing-card-price-desc">
                    <Trans i18nKey="pricing.price-desc">one-time</Trans>
                  </span>
                </div>
                <ul className="pricing-card-features">
                  {(t(`pricing.plans.${plan.key}.features`, { returnObjects: true }) as string[]).map((feature: string, featureIndex: number) => (
                    <li key={featureIndex} className="pricing-card-feature">
                      <Check size={20} className="pricing-card-feature-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`pricing-card-btn${plan.isPopular ? ' popular' : ''}`}>
                  <Trans i18nKey="pricing.get-started">Get Started</Trans>
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