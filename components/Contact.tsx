import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  surname: string;
  contactNumber: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    surname: '',
    contactNumber: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate functionality to trigger email client (as backend isn't available)
    // This allows the user to actually send the email via their default mail client
    const subject = `New Inquiry from ${formData.name} ${formData.surname}`;
    const body = `Name: ${formData.name} ${formData.surname}%0D%0AContact: ${formData.contactNumber}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    
    // We set a timeout to allow the "Thank you" message to appear first, then open mail client
    setTimeout(() => {
        window.location.href = `mailto:vhugalamathivha@gmail.com?subject=${subject}&body=${body}`;
    }, 1500);

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
          
          {/* Left Side - Info */}
          <div className="bg-black text-white p-10 md:w-2/5 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                 <div className="absolute top-10 left-10 w-32 h-32 bg-red-900 rounded-full blur-[80px] opacity-40"></div>
            </div>
            <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Interested?</h3>
                <p className="text-gray-300 mb-8">
                Ready to start your project? Fill out the form and let's create something amazing together.
                </p>
            </div>
            <div className="relative z-10 space-y-4 text-sm text-gray-400">
                <p>vhugalamathivha@gmail.com</p>
                <p>South Africa</p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="p-10 md:w-3/5 bg-gray-50">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank you {formData.name}!</h3>
                <p className="text-gray-600">
                  We'll get in touch soon! Looking forward to working with you 🤍
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-sm text-red-800 font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Surname</label>
                    <input
                      type="text"
                      name="surname"
                      required
                      value={formData.surname}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                  <input
                    type="tel"
                    name="contactNumber"
                    required
                    value={formData.contactNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center items-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-red-800 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 transition-colors duration-300"
                >
                  Send Message
                  <Send size={18} className="ml-2" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;