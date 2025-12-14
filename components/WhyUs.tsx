import React from 'react';
import { Target, Heart, Award } from 'lucide-react';
import { WhyUsItem } from '../types';

const reasons: WhyUsItem[] = [
  {
    title: 'Our Goals',
    description: 'To provide affordable, high-quality digital presence for businesses of all sizes, enabling them to compete in the modern market.',
    icon: <Target className="text-white" size={28} />,
  },
  {
    title: 'Our Values',
    description: 'Integrity, transparency, and client-centricity. We believe in building long-term relationships through trust and exceptional results.',
    icon: <Heart className="text-white" size={28} />,
  },
  {
    title: 'Our Experience',
    description: 'Years of expertise in full-stack development, UI/UX design, and software architecture planning ensures your project is in safe hands.',
    icon: <Award className="text-white" size={28} />,
  },
];

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-black text-white relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We are more than just developers; we are your partners in digital growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center p-6 border border-gray-800 rounded-xl hover:border-red-800 transition-colors duration-300 bg-gray-900/50 backdrop-blur-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-800 mb-6 shadow-lg shadow-red-800/30">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;