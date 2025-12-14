import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 flex items-center gap-2">
            <img 
              src="https://images.unsplash.com/photo-1629904853716-600abd17529c?q=80&w=200&auto=format&fit=crop" 
              alt="VM Projects Logo" 
              className="h-8 w-8 rounded-lg object-cover"
            />
        </div>
        <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} VM Projects. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;