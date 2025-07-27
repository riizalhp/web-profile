'use client';

import { useState } from 'react';

export default function GetInTouchSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Project Inquiry from ${formData.name}`;
    const body = `Hi Rizal,%0D%0A%0D%0AName: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}%0D%0A%0D%0ABest regards,%0D%0A${formData.name}`;
    window.location.href = `mailto:rizalhp12345@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="scroll-animate">
      <div className="card max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <p className="text-gray-300 text-lg">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-200">Let's Collaborate</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm always excited to work on new projects and help businesses achieve their goals through 
              effective project management and digital solutions.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <span className="material-icons text-purple-400">email</span>
                <span>rizalhp12345@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <span className="material-icons text-purple-400">phone</span>
                <span>+62 896-6791-2404</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <span className="material-icons text-purple-400">location_on</span>
                <span>Yogyakarta, Indonesia</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-purple-200 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-purple-900/20 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-purple-200 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-purple-900/20 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-purple-200 mb-2">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-purple-900/20 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center justify-center space-x-2"
            >
              <span>Send Message</span>
              <span className="material-icons">send</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}