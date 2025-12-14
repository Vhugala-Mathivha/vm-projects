import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Briefcase, Code } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: 'Portfolio Website',
    price: 'R1000',
    description: 'Perfect for freelancers, artists, and professionals showcasing their work.',
    features: ['Responsive Design', 'Contact Form', 'Gallery Integration', 'Social Media Links'],
  },
  {
    title: 'E-commerce Website',
    price: 'R3500',
    description: 'A complete online store solution to sell your products globally.',
    features: ['Payment Gateway', 'Inventory Management', 'Product Catalog', 'Admin Dashboard'],
  },
  {
    title: 'Custom Development',
    price: 'R2500',
    description: 'Tailored software solutions, diagrams, and specialized web apps.',
    features: ['Custom Logic', 'Database Integration', 'Software Diagrams', 'API Integration'],
  },
];

const icons = [Briefcase, ShoppingBag, Code];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services & Pricing</h2>
          <div className="w-24 h-1 bg-red-800 mx-auto"></div>
          <p className="mt-4 text-gray-600">Transparent pricing for premium quality.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:border-red-800 transition-all duration-300 flex flex-col"
              >
                <div className="p-8 flex-1">
                  <div className="w-14 h-14 bg-black rounded-lg flex items-center justify-center mb-6 text-red-800">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-500 mb-6">{service.description}</p>
                  <div className="mb-6">
                    <span className="text-sm text-gray-400">Start up price</span>
                    <div className="text-4xl font-bold text-red-800">{service.price}</div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-red-800 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 border-t border-gray-100">
                  <a href="#contact" className="block w-full text-center py-2 rounded-lg border-2 border-black text-black font-bold hover:bg-black hover:text-white transition-colors">
                    Choose Plan
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;