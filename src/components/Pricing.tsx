import React from 'react';
import { Check } from 'lucide-react';

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
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Transparent Pricing</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Choose the perfect plan for your business needs. All plans include our premium support and satisfaction guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 ${
                plan.isPopular ? 'border-2 border-teal-500' : ''
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-teal-500 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-800 mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-800">${plan.price}</span>
                  <span className="text-gray-500 ml-2">one-time</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <Check size={20} className="text-teal-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.isPopular
                    ? 'bg-teal-600 text-white hover:bg-teal-700'
                    : 'bg-gray-100 text-slate-800 hover:bg-gray-200'
                }`}>
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